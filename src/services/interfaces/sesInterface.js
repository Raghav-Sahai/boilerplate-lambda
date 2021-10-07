const config = require('config')
const AWS = require('aws-sdk');

const ses = new AWS.SES({ region: config.get('aws.region') });

exports.sendSesMessage = async () => {
    console.log("sesInterface::sendSesMessage")

    const params = {
        Destination: {
          ToAddresses: ["Recipient@email.com"]
        },
        Message: {
          Body: {
            Text: { Data: "Test" }
          },
          Subject: { Data: "Test Email" },
        },
        Source: "SourceEmailAddress"
    };

    return ses.sendEmail(params).promise()
}
