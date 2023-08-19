const path = require('path')
const expressValidator = require('express-validator');
let db = require("../database/models");
/* const Op = db.Sequelize.Op; */

const productValidations =
    [
        expressValidator.body('name')
            .notEmpty()
            .withMessage('El nombre no debe estar vacío')
            .isLength({ min: 5, max: 70 }).withMessage("El nombre de tener al menos 5 caracteres")
            .custom((value) => {
                if (value.includes('!')) {
                    throw new Error('El nombre no debe contener signo de exclamación');
                }
                return true;
            }),
        expressValidator.body('product_price')
            .notEmpty().withMessage('El precio no debe estar vacío'),
        expressValidator.body('condition')
            .optional(),
        expressValidator.body('product_price')
            .notEmpty().withMessage('El precio no debe estar vacío'),
        expressValidator.body('product_inStock')
            .notEmpty().withMessage('El stock no debe estar vacío'),
        expressValidator.body('description')
            .notEmpty()
            .withMessage('Debe añadir un descripción')
            .bail()
            .isLength({ min: 20 })
            .withMessage("La descripción debe contener al menos 20 carcateres"),
        expressValidator.body("image")
            /* .notEmpty().withMessage("Tienes que ingresar una imagen").bail() */
            .custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.png', '.gif'];
            if (file) {
                let extension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(extension)) {
                    throw new Error(`Tienes que subir una foto en formato ${acceptedExtensions.join(', ')}`);
                };
            };
            return true;
        }),
        /* expressValidator.body('product_category')
            .notEmpty().withMessage('Debe ingresar una categoria').bail()
            .custom(async (value, { req }) => {
                let categoryInDb = await db.Category.findOne(
                    { where: { product_category: req.body.category_id } });
                if (!categoryInDb) {
                    throw new Error(`La categoria no existe en base de datos!`);
                };
                return true;
            }), */
        expressValidator.body('brand_code')
            .custom(async (value, { req }) => {
                let brandInDb = await db.Brand.findOne(
                    { where: { brand_code: req.body.brand_code } });
                if (!brandInDb) {
                    throw new Error(`La marca no existe en base de datos`);
                };
                return true;
            }),
    ]
    ;

module.exports = productValidations;
