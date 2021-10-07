const bugReportValidation = require('../../../services/validation/bugReportValidation')
const sendMessages = require('../../../services/sendMessages')
const responses = require('../responses')

exports.route = (api) => {
    api.post('/report-bug', async (req, res) => {

        // Extract body and validate
        const { body } = req
        const { valid: validRequestBody, errorText } = bugReportValidation.validate(body)

        // If request body is not valid, return 400
        if (!validRequestBody) return responses.invalidRequest(res, errorText)

        // Extract message and interfaces from body
        const { message, interfaces } = body

        try {
            await sendMessages(message, interfaces)
            responses.successfulRequest(res)
        } catch (_) {
            responses.serverError(res)
        }
    });
}
