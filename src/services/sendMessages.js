const sesInterface = require('./interfaces/sesInterface')

exports.sendMessages = async (message, interfaces) => {
    console.log("sendMessages::sendMessages(message, interfaces)", message, interfaces)

    const { email } = interfaces

    // TODO: If multiple interfaces, wrap in promise.allSettled?

    await sesInterface.sendSesMessage(message, email)
}