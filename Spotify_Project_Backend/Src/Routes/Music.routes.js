const express = require('express')
const musicControllers = require('../Controllers/Music.controller')
const authmiddlewares = require('../Middlewares/Authmiddleware')
const router = express.Router()
const multer = require('multer')

const upload  = multer()

router.post('/create-music',authmiddlewares.authArtist,  upload.single('music'), musicControllers.createMusic)

router.post('/create-album',authmiddlewares.authArtist,  musicControllers.createAlbum)


module.exports = router;