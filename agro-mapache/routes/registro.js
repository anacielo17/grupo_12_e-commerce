const express = require("express");
const registroRoutes = express.Router();
const registroController = require("../controllers/registro");


registroRoutes.get("/", registroController.getRegistro);

module.exports = registroRoutes;