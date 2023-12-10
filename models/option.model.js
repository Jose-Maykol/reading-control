const mongoose = require('mongoose')
const Schema = mongoose.Schema

const optionSchema = new Schema({
  option_id: Number,
  option_text: String
})

const Option = mongoose.model('Option', optionSchema)

module.exports = {
  Option,
  optionSchema
}
