const { validate } = require('../../../services/validation/bugReportValidation')
const { sendMessages } = require('../../../services/sendMessages')
const { successfulRequest, invalidRequest, serverError } = require('../responses')

exports.route = (api) => {
    api.post('/send-text', async (req, res) => {

        const { body } = req
        const { valid: validRequestBody, errorText } = validate(body)

        if (!validRequestBody) return invalidRequest(res, errorText)

        const { message, phoneNumber } = body

        try {
            await sendMessages(message, phoneNumber)
            successfulRequest(res)
        } catch (error) {
            console.log(error)
            serverError(res)
        }
    });
}
