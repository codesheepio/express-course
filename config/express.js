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

  app.set('views', './app/views')
  app.set('view engine', 'pug')

  require('../app/routes/index.routes')(app)

  app.use(express.static('./public'))

  return app
}
