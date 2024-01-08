const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
        type: String,
        title: String,
        price: Number,
        description:String,
        category:String,
        color:String,
        size:String,        
        image:[]
});

const productmodel = mongoose.model('Products', productSchema);
module.exports = productmodel;
