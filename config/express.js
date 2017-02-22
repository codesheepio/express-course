const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const bodyParser = require('body-parser')

module.exports = function() {
  const app = express()

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  } else {
    app.use(compression)
  }

  app.use(bodyParser.urlencoded({
    extended: true,
  }))
  app.use(bodyParser.json())

  require('../app/routes/index.routes')(app)

  return app
}
