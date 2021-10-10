const Ajv = require("ajv")
const ajv = new Ajv()

const { schema } = require('./bodySchema')
const valid = ajv.compile(schema)

exports.validateBody = (body) => (valid(body)
    ? { valid: true, errorText: '' }
    : { valid: false, errorText: ajv.errorsText(valid.errors) } 
)