const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const bodyParser = require('body-parser')
const sass = require('node-sass-middleware')
const validator = require('express-validator')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

module.exports = function() {
  const app = express()

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  } else {
    app.use(compression())
  }

  app.use(session({
    name: 'session',
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true,
    store: new RedisStore({
      host: 'localhost',
      port: 6379,
      pass: 'password',
    })
  }))
  app.use(bodyParser.urlencoded({
    extended: true,
  }))
  app.use(bodyParser.json())
  app.use(validator())

  app.set('views', './app/views')
  app.set('view engine', 'pug')

  require('../app/routes/index.routes')(app)
  require('../app/routes/user.routes')(app)

  app.use(sass({
    src: './sass',
    dest: './public/css',
    outputStyle: 'compressed',
    prefix: '/css',
    debug: true,
  }))

  app.use(express.static('./public'))

  return app
}
