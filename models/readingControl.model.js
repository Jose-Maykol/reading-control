const mongoose = require('mongoose')
const { questionSchema } = require('./question.model')
const Schema = mongoose.Schema

const readingControlSchema = new Schema({
  title: String,
  text: String,
  total_questions: Number,
  questions: [questionSchema],
  created_at: {
    type: Date,
    default: Date.now
  }
})

const ReadingControl = mongoose.model('ReadingControl', readingControlSchema)

module.exports = {
  ReadingControl,
  readingControlSchema
}
