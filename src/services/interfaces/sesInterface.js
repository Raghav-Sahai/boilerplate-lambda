const config = require('config')
const AWS = require('aws-sdk');

const ses = new AWS.SES({ region: config.get('aws.region') });

exports.sendSesMessage = async (message, recipientEmail) => {
    console.log("sesInterface::sendSesMessage")

    const params = {
        Destination: {
          ToAddresses: [recipientEmail]
        },
        Message: {
          Body: {
            Text: { Data: message }
          },
          Subject: { Data: "Test Email" },
        },
        Source: "SourceEmailAddress"
    };

    return ses.sendEmail(params).promise()
}
