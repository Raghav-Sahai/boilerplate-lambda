exports.schema = {
    type: "object",
    properties: {
      message: { type: "object" },
      interfaces: {
        type: "object",
        properties: {
          email: { type: "string" }
        },
        required: ["email"],
        additionalProperties: false
      }
    },
    required: ["message", "interfaces"],
    additionalProperties: false
}