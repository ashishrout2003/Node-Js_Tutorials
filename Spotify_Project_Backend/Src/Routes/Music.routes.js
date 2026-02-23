const express = require('express')
const musicControllers = require('../Controllers/Music.controller')
const router = express.Router()

router.post('/create-music', musicControllers.createMusic)


module.exports = router;