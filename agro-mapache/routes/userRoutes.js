const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userControllers");


userRoutes.get("/register", userController.getRegistro);
userRoutes.get("/login",userController.getLogin);

module.exports = userRoutes;


