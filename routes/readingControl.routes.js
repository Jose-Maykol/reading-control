const { Router } = require('express')
const { addReadingControl, getAllReadingControl } = require('../controllers/readingControl.controller')

const router = Router()

router.get('/', getAllReadingControl)
router.post('/', addReadingControl)

module.exports = router
