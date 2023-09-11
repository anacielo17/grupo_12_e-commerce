const express = require('express');
const router = express.Router();
const apiControllers = require('../controllers/apiControllers')


router.get('/products', apiControllers.productAll)
router.get('/product/:product_id',apiControllers.productDetail) 
router.get('/categories', apiControllers.categories)
router.get('/users/', apiControllers.usersAll)
router.get('/user/:customer_id', apiControllers.userDetail)
console.log("Solicitud POST a /checkout recibida en las rutas.")
router.post('/checkout', apiControllers.createOrder);



module.exports = router;