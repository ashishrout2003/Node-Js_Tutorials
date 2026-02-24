const jwt = require('jsonwebtoken')

async function authArtist(req, res, next){
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if(decoded.role !== "artist"){
            return res.status(401).json({
                message: "you do not have acces this page"
            })
        }
        req.user = decoded
        next()

    }catch(err){
        console.log(err)
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }
}
module.exports = {authArtist}