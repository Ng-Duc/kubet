const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SettingSchema = new Schema({
  keyProxy: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('settings', SettingSchema)