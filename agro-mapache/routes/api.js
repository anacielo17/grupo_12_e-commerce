const express = require('express');
const router = express.Router();
const apiControllers = require('../controllers/apiControllers')


router.get('/products', apiControllers.productAll)
router.get('/product/:product_id',apiControllers.productDetail) 
router.get('/user/:product_id/image', apiControllers.productImage)
router.get('/users/', apiControllers.usersAll)
router.get('/user/:customer_id', apiControllers.userDetail)
router.get('/user/:customer_id/image', apiControllers.userImage)


module.exports = router;