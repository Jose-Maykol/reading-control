const mongoose = require('mongoose')
const { questionSchema } = require('./question.model')
const Schema = mongoose.Schema

const readingControlSchema = new Schema({
  title: String,
  text: String,
  questions: [questionSchema]
})

const ReadingControl = mongoose.model('ReadingControl', readingControlSchema)

module.exports = {
  ReadingControl,
  readingControlSchema
}
