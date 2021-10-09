const Ajv = require("ajv")
const ajv = new Ajv()

const { schema } = require('./bodySchema')

const valid = ajv.compile(schema)

exports.validateBody = (body) => (valid(body)
    ? { valid: true, errorText: '' }
    : { valid: false, errorText: ajv.errorText(valid.errors) } 
)

exports.validateE164 = (phoneNumber) => {
    const regEx = /^\+[1-9]\d{10,14}$/;
    return regEx.test(phoneNumber)
        ? { valid: true, errorText: '' }
        : { valid: false, errorText: 'phoneNumber must be in E.164 format' }
}