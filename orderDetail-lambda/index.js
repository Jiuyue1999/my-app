const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodbTableName = 'order-detail';

exports.handler = async function (event) {
  console.log('Request event: ', event);

  let response;

  switch (true) {
    case event.httpMethod === 'POST' && event.path === '/order-service':
      try {
        const requestBody = JSON.parse(event.body);

        // Extract data from the request body
        const purchaseData = requestBody.purchaseData;

        // Check if an order with the same purchaseData already exists
        const existingOrder = await findOrderWithPurchaseData(purchaseData);

        if (existingOrder) {
          // If an order with the same purchaseData exists, respond with a conflict status
          response = buildResponse(409, 'Order with identical purchase data already exists');
        } else {
          // Generate a timestamp-based orderId
          const orderId = generateTimestampOrderId();

          // Save each purchase item to DynamoDB with the timestamp-based orderId
          const saveResults = await Promise.all(purchaseData.map(async (purchaseItem) => {
            return saveOrderDetails({
              orderId,
              purchaseItem,
            });
          }));

          // Respond with the results
          response = buildResponse(200, saveResults);
        }
      } catch (error) {
        console.error('Error processing purchase data:', error);
        response = buildResponse(500, 'Internal Server Error');
      }
      break;

    default:
      response = buildResponse(404, 'Not Found');
  }

  return response;
};

async function findOrderWithPurchaseData(purchaseData) {
  const params = {
    TableName: dynamodbTableName,
    FilterExpression: 'purchaseData = :purchaseData',
    ExpressionAttributeValues: {
      ':purchaseData': purchaseData,
    },
  };

  const result = await dynamodb.scan(params).promise();

  if (result.Items && result.Items.length > 0) {
    // Return the first matching order
    return result.Items[0];
  }

  return null;
}

async function saveOrderDetails(orderDetails) {
  const params = {
    TableName: dynamodbTableName,
    Item: orderDetails,
  };

  try {
    await dynamodb.put(params).promise();
    return {
      Operation: 'SAVE',
      Message: 'SUCCESS',
      Item: orderDetails, // No need to specify attribute types here
    };
  } catch (error) {
    console.error('Error saving order details:', error);
    // Returning an error response
    return {
      Operation: 'SAVE',
      Message: 'ERROR',
      Error: error.message,
    };
  }
}


function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
}

function generateTimestampOrderId() {
  // Generate a timestamp-based orderId
  return new Date().toISOString().replace(/[-:]/g, '').replace('.', '');
}
