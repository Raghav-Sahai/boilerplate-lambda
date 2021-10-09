const { validateBody, validateE164 } = require('../../../services/validation/bodyValidation')
const { sendMessages } = require('../../../services/sendMessages')
const { successfulRequest, invalidRequest, serverError } = require('../responses')

exports.route = (api) => {
    api.post('/send-text', async (req, res) => {

        const { body } = req
        const { valid: validRequestBody, errorText: bodyErrorText } = validateBody(body)
        if (!validRequestBody) return invalidRequest(res, bodyErrorText)

        const { message, phoneNumber } = body
        const { valid: validPhoneNumber, errorText: phoneNumberErrorText } = validateE164(phoneNumber)
        if (!validPhoneNumber) return invalidRequest(res, phoneNumberErrorText)

        try {
            await sendMessages(message, phoneNumber)
            successfulRequest(res)
        } catch (error) {
            console.log(error)
            serverError(res)
        }
    });
}
