const musicModel = require('../Models/Music.models')
const jwt = require('jsonwebtoken')
const {uploadFile}  = require('../Services/Storage.services')


async function createMusic(req, res){

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }
    try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if(decoded.role !=="artist"){
            return res.status(401).json({
                message: "you can not acces this page"
            })
        }

    
    const {title} = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString('base64'))

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: decoded.id
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
}catch(err){
    console.log(err);
    
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }

} 

module.exports = {createMusic}