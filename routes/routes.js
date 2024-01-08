const { Router } = require("express");

const {loginpost,signuppost,products,getproducts,id,cart,postcart} = require("../conttroller/user.conttroler");


const router = Router();

router.post('/login',loginpost)
router.post('/signup',signuppost)
router.get('/products',getproducts)
router.post('/product',products)
router.get('/products/:nens',id)
router.post('/cart',postcart)
router.get('/cart',cart)

module.exports = router