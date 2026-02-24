const express = require('express')
const musicControllers = require('../Controllers/Music.controller')
const router = express.Router()
const multer = require('multer')

const upload  = multer()

router.post('/create-music',upload.single('music'), musicControllers.createMusic)


module.exports = router;