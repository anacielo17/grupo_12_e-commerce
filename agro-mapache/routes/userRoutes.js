const express = require("express");
const userRoutes = express.Router();
const multer = require("multer")
const path = require("path")
const validations = require ("../middlewares/userValidations")
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require ("../middlewares/guestMiddleware")
/* const { body } = require("express-validator"); */

const controllers = require("../controllers/userControllers");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img/user')
    },
    filename: (req, file, cb) => {
        cb(null, "user-" + Date.now() + '-' + file.originalname)

    }
});
const upload = multer({ storage });
/* const validations = [
    body("firstName").notEmpty().withMessage("Debes escribir un nombre"),
    body("lastName").notEmpty().withMessage("Debes escribir un apellido"),
    body("email").notEmpty().withMessage("Debes escribir un correo electrónico").bail().isEmail().withMessage("Debe ser formato correo electrónico"),
    body("password").notEmpty().withMessage("Debes agregar una contraseña"),
    body("confirmPassword").notEmpty().withMessage("Debes confirmar tu contraseña"),
    body("phone").notEmpty().withMessage("Debes escribir un numero telefónico"), ,
    body("country").notEmpty().withMessage("Este campo no puede estar vacio"),
    body("gender").notEmpty().withMessage("Este campo no puede estar vacio"),
    body("type").notEmpty().withMessage("Este campo no puede estar vacio"),
] */

userRoutes.get("/login", guestMiddleware, controllers.getLogin);
userRoutes.get("/registro", guestMiddleware, controllers.getRegistro)
userRoutes.get("/list", controllers.getList);
userRoutes.get("/profile/", authMiddleware, controllers.profile);
userRoutes.get("/sign-out", controllers.signOut);
userRoutes.get("/:id/update", controllers.getUpdate) // vamos al form de edicion 


userRoutes.post("/registro",upload.single('avatar'), /* validations.validateCreateUser, */ controllers.registerUser);
userRoutes.post("/login", controllers.loginUser);
userRoutes.put("/:id/update", upload.single('avatar'), controllers.updateUser) // put , accion de edicion, enviamos el formulario
userRoutes.delete("/:id/delete", controllers.deleteUser)
module.exports = userRoutes;

