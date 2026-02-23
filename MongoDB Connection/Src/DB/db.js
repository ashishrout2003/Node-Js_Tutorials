const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect('mongodb+srv://Ashish:Sj0XtMH4uOkrIONw@backend.1mpni3u.mongodb.net/Hello')
    console.log('connect to DB');
    
}
module.exports = connectDB;