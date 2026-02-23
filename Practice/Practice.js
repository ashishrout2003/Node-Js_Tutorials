const express = require('express');
const path = require('node:path');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req, res, err, next){
    res.render('Hello');
  console.error(err.stack)  
res.status(300).send('something went wrong');
})

app.listen(3000,function(){
    console.log('server is running');
    
});