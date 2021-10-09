exports.schema = {
    type: "object",
    properties: {
      message: { type: "string" },
      phoneNumber: { type: "number" }
    },
    required: ["message", "phoneNumber"],
    additionalProperties: false
}