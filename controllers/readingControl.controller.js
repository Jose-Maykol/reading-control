const { ReadingControl } = require('../models/readingControl.model')

const addReadingControl = async (req, res) => {
  try {
    const { title, text, questions } = req.body

    const newReading = new ReadingControl({
      title,
      text,
      questions
    })

    const savedReading = await newReading.save()

    res.status(201).json(savedReading)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const getAllReadingControl = async (req, res) => {
  try {
    const readings = await ReadingControl.find()
    res.json({readings})
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const getReadingControlById = async (req, res) => {
  try {
    const reading = await ReadingControl.findById(req.params.id)
    res.json(reading)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const updateReadingControl = async (req, res) => {
  try {
    const { title, text, questions } = req.body
    const reading = await ReadingControl.findById(req.params.id)
    if (title) reading.title = title
    if (text) reading.text = text
    if (questions) reading.questions = questions
    await reading.save()
    res.json(reading)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const deleteReadingControl = async (req, res) => {
  try {
    const reading = await ReadingControl.findById(req.params.id)
    await reading.remove()
    res.json({ message: 'Deleted reading' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  getAllReadingControl,
  getReadingControlById,
  addReadingControl,
  updateReadingControl,
  deleteReadingControl
}
