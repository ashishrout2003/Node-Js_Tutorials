require('dotenv').config()
const app = require('./Src/App')
const connectDb = require('./Src/DB/db')

connectDb()
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})