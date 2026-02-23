const express = require('express');

const app = express();
const userModel = require('./Usermodel');

app.get('/',function(req, res){
res.send('hello')
})

app.get('/create', async (req, res) =>{
   let createdUser = await userModel.create({
        name: 'aman',
        username: 'aman',
        email: 'aman@gmail.com'
    })
    res.send(createdUser);
    
})

app.get('/update', async (req, res) =>{
   let updateduser = await userModel.findOneAndUpdate({username: 'Ashish'}, {name: 'ashish rout'},{new: true});
    res.send(updateduser);
    
})

app.get('/read', async (req, res)=>{
let users = await userModel.find({});
res.send(users);

})

app.get('/delete', async (req, res)=>{
let Deleteduser = await userModel.findOneAndDelete({username: 'Ashish'});
res.send(Deleteduser);

})



app.listen(4000)