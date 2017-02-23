const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  username: { type: String, unique: true },
  email: { type: String, index: true },
  password: String,
})

mongoose.model('User', UserSchema)
