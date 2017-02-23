const mongoose = require('mongoose')
const config = require('./config')

module.exports = function() {
  const db = mongoose.connect(config.mongoUri)

  return db
}
