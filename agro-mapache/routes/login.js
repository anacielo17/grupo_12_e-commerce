const express = require("express");

const loginRoutes = express.Router();

const loginController = require("../controllers/login");

loginRoutes.get("/",loginController.getLogin);

module.exports = loginRoutes;