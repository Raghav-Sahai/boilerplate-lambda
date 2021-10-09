const INTERNAL_SERVER_ERROR = "Internal server error"
const SUCCESSFUL_RESPONSE = "Successfully sent message"

exports.successfulRequest = (res) => {
    return res.status(200).send({ developerText: SUCCESSFUL_RESPONSE })
}

exports.invalidRequest = (res, developerText) => {
    return res.status(400).send({ developerText })
}

exports.serverError = (res) => {
    return res.status(500).send({ developerText: INTERNAL_SERVER_ERROR })
}