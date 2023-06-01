const express = require("express");

const productsRoutes = express.Router();


const productsController = require ("../controllers/productsController");

productsRoutes.get("/carrito-compra", productsController.getCarrito)
productsRoutes.get("/", productsController.getCatalogo);
productsRoutes.get("/create", productsController.getFormulario)
productsRoutes.post("/create", productsController.getCreate)
productsRoutes.get("/:id", productsController.getId)
productsRoutes.get("/:id/edit", productsController.getEdit)
productsRoutes.put("/:id/edit", productsController.putEdit)
productsRoutes.delete("/:id/delete", productsController.deleteProduct)

module.exports = productsRoutes;