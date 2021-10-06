const Ajv = require("ajv")
const ajv = new Ajv()

const { schema } = require('./bugReportSchema')

const valid = ajv.compile(schema)

exports.validate = (body) => (valid(body)
    ? { valid: true, errorText: '' }
    : { valid: false, errorText: ajv.errorText(valid.errors) } 
)