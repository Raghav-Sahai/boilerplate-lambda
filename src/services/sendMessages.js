const snsInterface = require('./interfaces/snsInterface')

exports.sendMessages = async (message, interfaces) => {
    console.log("sendMessages::sendMessages(message, interfaces)", message, interfaces)

    // TODO: If multiple interfaces, wrap in promise.allSettled?
    await snsInterface.sendSnsMessage()
}