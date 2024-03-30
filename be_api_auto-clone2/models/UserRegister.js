const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserRegisterSchema = new Schema({
  username: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  casio: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('userRegisters', UserRegisterSchema)