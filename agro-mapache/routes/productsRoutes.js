const express = require("express");

const productsRoutes = express.Router();

const productsController = require ("../controllers/productsController");

productsRoutes.get("/carrito-compra", productsController.getCarrito)
productsRoutes.get("/catalogo", productsController.getCatalogo);

module.exports = productsRoutes;