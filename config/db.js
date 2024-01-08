const mongoose = require('mongoose');

const connect = async()=>{
    await mongoose.connect('mongodb+srv://max:max@cluster0.g6vbdlc.mongodb.net/max?retryWrites=true&w=majority')
    console.log("connected to MongoDB");
}

module.exports = connect