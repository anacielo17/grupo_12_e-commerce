const { body } = require("express-validator")
const validations = {
    validateCreateUser :[
    body("firstName").notEmpty().withMessage("Debes escribir un nombre"),
    body("lastName").notEmpty().withMessage("Debes escribir un apellido"),
    body("email").notEmpty().withMessage("Debes escribir un correo electrónico").bail().isEmail().withMessage("Debe ser formato correo electrónico"),
    body("password").notEmpty().withMessage("Debes agregar una contraseña"),
    body("confirmPassword").notEmpty().withMessage("Debes confirmar tu contraseña"),
    body("phone").notEmpty().withMessage("Debes escribir un numero telefónico"), ,
    body("country").notEmpty().withMessage("Este campo no puede estar vacio"),
    body("gender").notEmpty().withMessage("Este campo no puede estar vacio"),
    body("type").notEmpty().withMessage("Este campo no puede estar vacio"),
], 
    validateLogin :[ 
        body ("email").isEmail().withMessage("Ingrese un correo electrónico valido")
    ]
 }
 module.exports = validations