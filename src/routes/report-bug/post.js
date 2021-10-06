const bugReportValidation = require('../../services/validation/bugReportValidation')
const sendMessages = require('../../services/sendMessages')
const responses = require('../responses')

exports.route = (api) => {
    api.post('/report-bug', async (req, res) => {

        const { body } = req
        const { valid: validRequestBody, errorText } = bugReportValidation.validate(body)

        if (!validRequestBody) return responses.invalidRequest(res, errorText)

        const { message, interfaces } = body

        try {
            await sendMessages(message, interfaces)
            responses.successfulRequest(res)
        } catch (_) {
            responses.serverError(res)
        }
    });
}
