const mongoose = require("mongoose");
const validator = require("validator");

const conversationSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
    trim: true
  },
  member: {
    type: [messageSchema]
  }
});
