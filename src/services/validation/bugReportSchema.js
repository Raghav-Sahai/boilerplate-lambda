exports.schema = {
    type: "object",
    properties: {
      email: { type: "string" },
      bugDetails: { type: "string" },
      developerInformation: { type: "object" },
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
    required: ["email", "bugDetails", "interfaces"],
    additionalProperties: false,
}