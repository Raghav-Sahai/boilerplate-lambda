const snsInterface = require('./interfaces/snsInterface')

exports.sendMessages = async () => {
    console.log("sendMessages::sendMessages")

    // TODO: If multiple interfaces, wrap in promise.allSettled?
    await snsInterface.sendSnsMessage()
}