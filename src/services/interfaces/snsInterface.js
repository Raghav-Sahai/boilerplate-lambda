const config = require('config');
const AWS = require('aws-sdk');
const sns = new AWS.SNS({ region: config.get('aws.region'), apiVersion: '2010-03-31' });

exports.sendSnsMessage = async (message, phoneNumber) => {
    console.log("sesInterface::sendSesMessage(message, recipientEmail)", message, phoneNumber)

    const params = {
        Message: message, /* required */
        PhoneNumber: phoneNumber,
    };

    return sns.publish(params).promise()
}
