const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
const port = 4000
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const apiProxy = createProxyMiddleware('/public**', {
  target: 'https://poloniex.com',
  changeOrigin: true,
})
app.use(apiProxy)

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
