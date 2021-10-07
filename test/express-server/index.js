const express = require('express')
const bodyParser = require('body-parser')

const { convertToLambdaEvent, sendToLambda } = require('./handler')

const PORT = 9000

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.text())

console.log('Server started')

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

app.all('*', async (req, res) => {
    const lambdaEvent = convertToLambdaEvent(req)
    const response = await sendToLambda(lambdaEvent)
    res
      .status(response.statusCode)
      .set('Location', response.headers.location)
      .send(response.statusCode === 204 ? '' : JSON.parse(response.body))
})