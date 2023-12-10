const mongoose = require('mongoose')
const { optionSchema } = require('./option.model')
const Schema = mongoose.Schema

const questionSchema = new Schema({
  question_id: Number,
  question_text: String,
  options: [optionSchema]
})

const Question = mongoose.model('Question', questionSchema)

module.exports = {
  Question,
  questionSchema
}
