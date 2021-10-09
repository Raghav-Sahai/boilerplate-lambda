const { sendSnsMessage } = require('./interfaces/snsInterface')

exports.sendMessages = async (message, phoneNumber) => {
    console.log("sendMessages::sendMessages(message, phoneNumber)", message, phoneNumber)

    await sendSnsMessage(message, phoneNumber)
}