const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userid:{
       type: mongoose.Schema.Types.ObjectId,
       ref: "User",
     },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
  },
});

const cartmodels = mongoose.model("Cart", cartSchema);
module.exports = cartmodels;
