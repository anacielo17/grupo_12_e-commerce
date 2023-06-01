const express = require("express");

const indexRoutes = express.Router();

const indexController  = require("../controllers/indexControllers");


indexRoutes.get("/", indexController.getIndex);
indexRoutes.get("/contact", indexController.getContact);

module.exports = indexRoutes;