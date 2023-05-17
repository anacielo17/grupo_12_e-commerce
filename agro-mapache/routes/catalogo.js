const express = require("express");
const catalogoRoutes = express.Router();
const catalogoController = require("../controllers/catalogo");


catalogoRoutes.get("/", catalogoController.getCatalogo);

module.exports = catalogoRoutes;