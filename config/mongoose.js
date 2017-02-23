const mongoose = require('mongoose')
const config = require('./config')

module.exports = function() {
  mongoose.set('debug', config.debug)
  const db = mongoose.connect(config.mongoUri)

  require('../app/models/user.model')

  return db
}
