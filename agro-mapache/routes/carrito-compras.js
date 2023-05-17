const express = require("express");

const carritoRoutes = express.Router();

const carritoController = require ("../controllers/carrito-compras");

carritoRoutes.get("/", carritoController.getCarrito)

module.exports = carritoRoutes;

