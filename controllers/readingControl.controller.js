const { ReadingControl } = require('../models/readingControl.model')

const addReadingControl = async (req, res) => {
  try {
    const { title, text, questions, total_questions } = req.body

    const newReading = new ReadingControl({
      title,
      text,
      total_questions,
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
    const readings = await ReadingControl.find().sort({ created_at: -1 })
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

const calculateScore = async (req, res) => {
  try {
    const studentAnswers = req.body.answers
    const readingAssessment = await ReadingControl.findById(req.params.id)

    let score = 0
    let correctQuestions = 0
    let incorrectQuestions = 0
    let totalQuestions = readingAssessment.total_questions

    const results = []

    for (const question of readingAssessment.questions) {
        const studentAnswer = studentAnswers.find(answer => answer.question_id === question.question_id);

        if (studentAnswer) {
            const correctAnswer = question.correct_answer_text;
            const studentAnswerText = studentAnswer.answer_text;

            const isCorrect = correctAnswer.toLowerCase() === studentAnswerText.toLowerCase(); // Compare ignoring case

            if (isCorrect) {
                score += 1;
                correctQuestions++;
            } else {
                incorrectQuestions++;
            }

            results.push({
                question_id: question.question_id,
                correct: isCorrect,
            });
        }
    }

    const scoreOutOf20 = (score / totalQuestions) * 20;

    res.json({
        results,
        score: scoreOutOf20,
        correctQuestions,
        incorrectQuestions,
        totalQuestions,
    });
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  getAllReadingControl,
  getReadingControlById,
  addReadingControl,
  updateReadingControl,
  deleteReadingControl,
  calculateScore
}
