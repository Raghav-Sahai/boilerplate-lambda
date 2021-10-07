const { handler } = require('../../src/index')

exports.convertToLambdaEvent = (req) => {
    const lambdaEvent = {
        httpMethod: req.method,
        path: req.path,
        body: req.body,
        queryStringParameters: req.query,
        headers: {
            ...req.headers,
            accept: 'application/json;v=1'
        }
    };

    return lambdaEvent
}

exports.sendToLambda = async (lambdaEvent) => {
    return await handler(lambdaEvent)
}