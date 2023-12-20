const { Router } = require('express')
const { addReadingControl, getAllReadingControl, getReadingControlById, updateReadingControl, calculateScore } = require('../controllers/readingControl.controller')

const router = Router()

router.get('/', getAllReadingControl)
router.get('/:id', getReadingControlById)
router.post('/', addReadingControl)
router.put('/:id', updateReadingControl)
router.post('/:id/calculate_score',calculateScore)

module.exports = router
