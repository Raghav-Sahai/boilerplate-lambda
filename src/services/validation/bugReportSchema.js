exports.schema = {
    type: "object",
    properties: {
      message: {
        properties: {
          email: { type: "string" },
          bugDetails: { type: "string" },
          developerInformation: { type: "object" }
        },
        required: ["email", "bugDetails"],
        additionalProperties: false
      },
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