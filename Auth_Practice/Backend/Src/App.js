const express = require('express')
const multer = require('multer')
const uploadFile = require('./services/Storage.services')
const postModel = require('./Models/post.models')
const cors = require('cors')    
const app = express()

app.use(express.json())
app.use(cors())
const upload = multer({storage: multer.memoryStorage()})
app.post('/create-post', upload.single('image'), async(req, res)=>{

    const result = await uploadFile(req.file.buffer)
   const post = await postModel.create({
    image: result.url,
    caption: req.body.caption
   })
   return res.status(201).json({
    message: "post created successfully",
     post
   })
    
})

app.get('/posts', async(req, res)=>{

    const posts = await postModel.find()

    return res.status(200).json({
        message: "post Fatched Successfully",
        posts
    })
})


module.exports = app;