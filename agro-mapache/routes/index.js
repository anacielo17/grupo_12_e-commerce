const express = require("express");

const indexRoutes = express.Router();

const indexController  = require("../controllers/index");


indexRoutes.get("/", indexController.getIndex);

module.exports = indexRoutes;