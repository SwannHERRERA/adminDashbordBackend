const mongoose = require('mongoose')

const conversationSchema = mongoose.Schema({
  name: String,
  admin: Array
})

module.exports = mongoose.model('conversation', conversationSchema)
