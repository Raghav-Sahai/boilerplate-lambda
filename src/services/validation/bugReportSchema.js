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
          email: { type: "string" },
          phoneNumber: { type: "number" },
          slackHook: { type: "string" }
        },
        additionalProperties: false
      }
    },
    required: ["message", "interfaces"],
    additionalProperties: false
}