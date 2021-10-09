exports.schema = {
    type: "object",
    properties: {
      message: { type: "string" },
      phoneNumber: { type: "string" }
    },
    required: ["message", "phoneNumber"],
    additionalProperties: false
}