var AWS = require('aws-sdk');
AWS.config.update({region: 'REGION'});

exports.sendSnsMessage = async () => {
    console.log("snsInterface::sendSnsMessage")
}