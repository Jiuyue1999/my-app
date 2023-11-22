const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodbTableName = 'payment-info';

exports.handler = async function (event) {
  console.log('Request event: ', event);

  let response;

  switch (true) {
    case event.httpMethod === 'POST' && event.path === '/payment-info':
      const requestBody = JSON.parse(event.body);

      // Use an empty string as the paymentId for testing
     const paymentId = generateRandomNumber().toString();

      // Extract data from the request body
      const firstName = requestBody.firstName;
      const lastName = requestBody.lastName;
      const cardNumber = requestBody.cardNumber;
      const expirationDate = requestBody.expirationDate;
      const cvv = requestBody.cvv;

      // Save the data to DynamoDB with the empty paymentId
      const saveResult = await savePaymentData({
        paymentId,
        firstName,
        lastName,
        cardNumber,
        expirationDate,
        cvv,
      });

      // Respond with the result
      response = buildResponse(200, saveResult);
      break;

    default:
      response = buildResponse(404, 'Not Found');
  }

  return response;
};

async function savePaymentData(paymentData) {
  const params = {
    TableName: dynamodbTableName,
    Item: paymentData,
  };

  try {
    await dynamodb.put(params).promise();
    return {
      Operation: 'SAVE',
      Message: 'SUCCESS',
      Item: paymentData,
    };
  } catch (error) {
    console.error('Error saving payment data:', error);
    // Returning an error response
    return {
      Operation: 'SAVE',
      Message: 'ERROR',
      Error: error.message,
    };
  }
}
function generateRandomNumber() {
  // Generate a random whole number, convert to a string
  return Math.floor(Math.random() * 1000000).toString();
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
