const musicModel = require('../Models/Music.models')
const jwt = require('jsonwebtoken')
const {uploadFile}  = require('../Services/Storage.services')
const albumModel = require('../Models/Album.models')

async function createMusic(req, res){    
    const {title} = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString('base64'))

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id,
    })
    res.status(201).json({
        message: 'Music created successfully',
        music:{
            id: music._id,
            title: music.title,
            uri: music.uri,
            artist: music.artist
        }
        
    })
} 

async function createAlbum(req, res){
    
       const {title, musics } = req.body;

        const album = await albumModel.create({
            title,
            musics:musics,
            artist: req.user.id,
        })
        res.status(201).json({
            message: 'Album created successfully',
            album:{
                id: album._id,
                title: album.title,
                musics: album.musics,
                artist: album.artist
            }
        })
}

async function getAllMusics(req, res){

    const musics = await musicModel.find().limit(2)
    res.status(200).json({
        message: 'Musics retrieved successfully',
        musics: musics
    })
}

async function getAllAlbums(req, res){
    const albums = await albumModel.find().select('title artist').populate('artist', 'username')
    res.status(200).json({
        message: 'Albums retrieved successfully',
        albums: albums
    })
}

async function getalbumbyId(req, res){
    const albumId = req.params.albumId;
    const album = await albumModel.findById(albumId).populate('artist', 'username email').populate('musics')
    res.status(200).json({
        message: 'Album retrieved successfully',
        album: album
    })
}

module.exports = {createMusic, createAlbum, getAllMusics, getAllAlbums, getalbumbyId}