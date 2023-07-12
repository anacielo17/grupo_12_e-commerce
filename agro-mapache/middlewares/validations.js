const expressValidator = require('express-validator');

const validations = {
    validateCreateProduct: [
        expressValidator.body('name')
            .notEmpty()
            .withMessage('El nombre no debe estar vacío')
            .custom((value) => {
                if(value.includes('!')){
                    throw new Error('El nombre no debe contener signo de exclamación');
                } 
                return true;
            }),
        expressValidator.body('price')
            .notEmpty().withMessage('El precio no debe estar vacío')
    ]
};

module.exports = validations;