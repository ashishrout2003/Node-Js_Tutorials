const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(function(re1, res, next){
console.log('Middle wire is active');
next();

})

app.get('/',function(req, res){
res.send('Welcome to Node');
})

app.get('/profile',function(req, res){
res.send('i am ashish rout and i am 23 years old');
})
 
app.get('/contact',function(req, res, next){
return next(new Error('Not implemented'))

})
app.use((err, req, res, next)=>{
console.error(err.stack)
res.status(500).send('something went wrong')
})

app.listen(3000);