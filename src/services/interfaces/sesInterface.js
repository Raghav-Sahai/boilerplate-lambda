const config = require('config');
const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: config.get('aws.region') });

exports.sendSesMessage = async (message, recipientEmail) => {
    console.log("sesInterface::sendSesMessage(message, recipientEmail)", message, recipientEmail)

    const params = {
        Destination: {
          ToAddresses: [recipientEmail]
        },
        Message: {
          Body: {
            Text: { Data: message }
          },
          Subject: { Data: config.get('emailProperties.emailTitle') },
        },
        Source: config.get('emailProperties.sourceEmail')
    };

    return ses.sendEmail(params).promise()
}
