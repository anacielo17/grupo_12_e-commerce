const { body } = require("express-validator")
const validations = {
    validateCreateUser :[
    body("customer_name").notEmpty().withMessage("Debes escribir un nombre"),
    body("customer_lastName").notEmpty().withMessage("Debes escribir un apellido"),
    body("customer_email").notEmpty().withMessage("Debes escribir un correo electrónico").bail().isEmail().withMessage("Debe ser formato correo electrónico"),
    body("password").notEmpty().withMessage("Debes agregar una contraseña"),
    body("confirmPassword").notEmpty().withMessage("Debes confirmar tu contraseña"),
    body("customer_phone").notEmpty().withMessage("Debes escribir un numero telefónico"), ,
    body("customer_country").notEmpty().withMessage("Este campo no puede estar vacio"),
    body("customer_gender").notEmpty().withMessage("Este campo no puede estar vacio"),
    body("customer_type").notEmpty().withMessage("Este campo no puede estar vacio"),
], 
    validateLogin :[ 
        body ("customer_email").isEmail().withMessage("Ingrese un correo electrónico valido")
    ]
 }
 module.exports = validations