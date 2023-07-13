const express = require("express");
const userRoutes = express.Router();
const multer = require("multer")
const path = require ("path")

const controllers = require("../controllers/userControllers");

const storage= multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, './public/img/user')
    }, 
    filename: (req, file, cb) =>{
        cb(null, "user-" + Date.now()+ '-' + file.originalname )

    }
});  
const upload= multer({storage});

userRoutes.get("/login",controllers.getLogin); 
userRoutes.get("/registro", controllers.getRegistro)  
userRoutes.get("/list",controllers.getList);
userRoutes.get("/sign-out", controllers.signOut); 
userRoutes.get("/:id/update",controllers.getUpdate) // vamos al form de edicion 
userRoutes.post("/registro", upload.single('avatar'), controllers.registerUser);
userRoutes.post("/login",controllers.loginUser);
userRoutes.put("/:id/update",upload.single('avatar'),controllers.updateUser) // put , accion de edicion, enviamos el formulario
userRoutes.delete("/:id/delete",controllers.deleteUser) 
module.exports = userRoutes; 

 