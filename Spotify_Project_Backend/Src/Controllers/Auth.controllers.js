const userModel = require('../Models/User.models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

async function registerUser(req, res){

   const {username, email, password, role = 'user'} = req.body

   const isUseralreadyExist = await userModel.findOne({

    $or:[
        {email},
        {username}
    ]
   })
   if(isUseralreadyExist){
    return res.status(400).json({
        message: 'User already exist'
    })
   }
   const hash = await bcrypt.hash(password, 12)
   const user = await userModel.create({
    username,
    email,
    password:hash,
    role

   })
   const token = jwt.sign({
    id:user._id,
    role:user.role
   },process.env.JWT_SECRET_KEY)

   res.cookie('token', token)

   res.status(201).json({
    message: 'User registered successfully',
    user: {
       id:user._id,
       username:user.username,
       email:user.email,
       role:user.role
    }
   })

}

async function loginUser(req, res){
    const {email, username, password} = req.body
    const user = await userModel.findOne({
        $or:[
            {email},
            {username}
        ]
    })

    if(!user){
        return res.status(401).json({
            message: 'Invalid credentials'
        })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        return res.status(401).json({
            message: 'Invalid credentials'
        })
    }
    const token = jwt.sign({
        id: user._id,
        role:user.role
    },process.env.JWT_SECRET_KEY)

    res.cookie('token', token)
    res.status(200).json({
        message: 'User logged in successfully',
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role
        }
    })

}

async function logoutUser(req, res)
{
    res.clearCookie('token')
    res.status(200).json({
        message: 'User logged out successfully'
    })
}
module.exports = {registerUser, loginUser, logoutUser}