const express  = require('express')
const authRoutes = require('../Src/Routes/Auth.routes')
const cookieParser = require('cookie-parser')
const postRoutes = require('../Src/Routes/Post.routes')


const app = express()
app.use(express.json())
app.use(cookieParser())


app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)

module.exports = app