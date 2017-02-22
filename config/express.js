const express = require('express')

module.exports = function() {
  const app = express()
  require('../app/routes/index.routes')(app)

  return app
}
