const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodbTableName = 'shipment-info';

exports.handler = async function (event) {
  console.log('Request event: ', event);

  let response;

  switch (true) {
    case event.httpMethod === 'POST' && event.path === '/shipment-info':
      const requestBody = JSON.parse(event.body);

      // Generate a random number as the shipmentId for testing
      const shipmentId = generateRandomNumber().toString();

      // Extract data from the request body
      const firstName = requestBody.firstName;
      const lastName = requestBody.lastName;
      const addressLine1 = requestBody.addressLine1;
      const addressLine2 = requestBody.addressLine2;
      const phoneNumber = requestBody.phoneNumber;
      const state = requestBody.state;
      const zipCode = requestBody.zipCode;

      // Save the data to DynamoDB with the random shipmentId
      const saveResult = await saveShipmentData({
        shipmentId,
        firstName,
        lastName,
        addressLine1,
        addressLine2,
        phoneNumber,
        state,
        zipCode,
      });

      // Respond with the result
      response = buildResponse(200, saveResult);
      break;

    default:
      response = buildResponse(404, 'Not Found');
  }

  return response;
};

async function saveShipmentData(shipmentData) {
  const params = {
    TableName: dynamodbTableName,
    Item: shipmentData,
  };

  try {
    await dynamodb.put(params).promise();
    return {
      Operation: 'SAVE',
      Message: 'SUCCESS',
      Item: shipmentData,
    };
  } catch (error) {
    console.error('Error saving shipment data:', error);
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

function generateRandomNumber() {
  // Generate a random whole number, convert to a string
  return Math.floor(Math.random() * 1000000).toString();
}
