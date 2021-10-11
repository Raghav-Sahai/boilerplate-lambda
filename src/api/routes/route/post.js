const { validateBody } = require('../../../services/validation/validation')
const { execute } = require('../../../services/execute')
const { successfulRequest, invalidRequest, serverError } = require('../../../resources/responses')

exports.route = (api) => {
    api.post('/route', async (req, res) => {

        const { body } = req
        const { valid: validRequestBody, errorText: bodyErrorText } = validateBody(body)
        if (!validRequestBody) return invalidRequest(res, bodyErrorText)

        try {
            await execute(body)
            successfulRequest(res)
        } catch (error) {
            console.log(error)
            serverError(res)
        }
    });
}
