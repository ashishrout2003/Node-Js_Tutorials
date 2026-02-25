const express = require('express')
const musicControllers = require('../Controllers/Music.controller')
const authmiddlewares = require('../Middlewares/Authmiddleware')
const router = express.Router()
const multer = require('multer')

const upload  = multer()

router.post('/create-music',authmiddlewares.authArtist,  upload.single('music'), musicControllers.createMusic)

router.post('/create-album',authmiddlewares.authArtist,  musicControllers.createAlbum)

router.get('/', authmiddlewares.authUser,  musicControllers.getAllMusics)

router.get('/albums', musicControllers.getAllAlbums)

router.get('/albums/:albumId', musicControllers.getalbumbyId)




module.exports = router;