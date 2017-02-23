const express = require('./config/express')
const mongoose = require('mongoose')

const uri = 'mongodb://localhost/my-project'
const db = mongoose.connect(uri)

const app = express()

app.listen(3000)
console.log('Server running at http://localhost:3000')

module.exports = app
