const express = require('express');

const cors = require('cors');
const connect = require('./config/db');
const router = require('./routes/routes');
const app = express();
app.use(express.json())
app.use(cors())
app.use(router)
// app.get("/",(req,res)=>{
//     res.send("Hello world")
// })



// let upload = multer({
//     dest:"img/"
// })

app.listen(8080,()=>{
    console.log('listening on port 8080')
    connect()
})