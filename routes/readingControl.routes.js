const { Router } = require('express')
const { addReadingControl, getAllReadingControl, getReadingControlById, updateReadingControl } = require('../controllers/readingControl.controller')

const router = Router()

router.get('/', getAllReadingControl)
router.get('/:id', getReadingControlById)
router.post('/', addReadingControl)
router.put('/:id', updateReadingControl)

module.exports = router
