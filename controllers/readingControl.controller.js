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

module.exports = {
  addReadingControl
}
