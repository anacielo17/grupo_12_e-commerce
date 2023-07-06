const express = require("express");
const userRoutes = express.Router();
const controllers = require("../controllers/userControllers");


userRoutes.get("/registro", controllers.getRegistro)  
userRoutes.get("/login",controllers.getLogin); 
userRoutes.get("/list",controllers.getList); 
userRoutes.post("/list", controllers.postUser);
userRoutes.get("/:id/update",controllers.getUpdate) // vamos al form de edicion 
userRoutes.put("/:id/update",controllers.updateUser) // put , accion de edicion, enviamos el formulario
userRoutes.delete("/:id/delete",controllers.deleteUser)
module.exports = userRoutes;

