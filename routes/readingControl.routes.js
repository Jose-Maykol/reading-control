
const { Router } = require('express');
const { addReadingControl } = require('../controllers/readingControl.controller');

const router = Router();

router.post('/', addReadingControl);