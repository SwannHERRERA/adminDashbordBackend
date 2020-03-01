const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  Role: Array
})

module.exports = mongoose.model('User', userSchema)
