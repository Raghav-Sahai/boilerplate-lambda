var AWS = require('aws-sdk');
AWS.config.update({region: 'REGION'});

exports.sendSesMessage = async () => {
    console.log("sesInterface::sendSesMessage")
}
