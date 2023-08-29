const path = require('path')
const {body} = require("express-validator")
let db = require("../database/models");
const userValidations =
    [
        body("customer_name").notEmpty().withMessage("Debes escribir un nombre").isLength({ min: 2, max: 20 }).withMessage("El nombre de tener al menos 2 caracteres"),
        body("customer_lastName").notEmpty().withMessage("Debes escribir un apellido").isLength({ min: 2, max: 20 }).withMessage("El nombre de tener al menos 2 caracteres"),

        body("customer_email").notEmpty().withMessage("Debes escribir un correo electrónico").bail()
            .isEmail().withMessage("Debe ser formato correo electrónico").bail()
            .custom(async (value, { req }) => {
                let emailInDb = await db.Customer.findOne(
                    { where: { customer_email: req.body.customer_email } });
                if (emailInDb) {
                    throw new Error(`Ese email ya se encuentra registrado!`);
                };
                return true;
            }), 
        body("password").notEmpty().withMessage("Debes agregar una contraseña").isLength({ min: 8 }).withMessage("Debe tener al menos 8 carcateres").bail(),
        body("confirmPassword").notEmpty().withMessage("Debes confirmar tu contraseña")/* .equals().withMessage("Las contraseñas no coinciden").bail() */
            .custom((value, { req }) => {
                if (req.body.password !== req.body.confirmPassword) {
                    throw new Error('Las contraseñas no coinciden');
                };
                return true;
            }), 
        body("customer_phone").notEmpty().withMessage("Debes escribir un numero telefónico").isNumeric().withMessage("Debe ser numérico"), 
        body("customer_country").notEmpty().withMessage("Este campo no puede estar vacio"),
        body("customer_gender").notEmpty().withMessage("Este campo no puede estar vacio"),
        body("customer_type").notEmpty().withMessage("Este campo no puede estar vacio"),
        body("image").optional().custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
            if (file) {
                let extension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(extension)) {
                    throw new Error(`Tienes que subir una foto en formato ${acceptedExtensions.join(', ')}`);
                };
            };
            return true;
        })
    ]

module.exports = userValidations
