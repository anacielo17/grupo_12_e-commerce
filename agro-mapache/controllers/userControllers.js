const fs = require("fs")
const uuid = require("uuid")
const path = require("path");
const bcrypt = require("bcrypt")
let db = require("../database/models")
/* const Op = db.Sequelize.Op */
const { validationResult } = require("express-validator")
const userModel = require('../models/user');

const controllers = {

    getRegistro: (req, res) => {

        res.render("registro", { title: "registro" })
    },
    getLogin: (req, res) => {
        const error = req.query.error || "";

        res.render("login", { title: "login", error })
    },
    getList: async (req, res) => {
        try {
            const customers = await db.Customer.findAll({
                raw: true
            });

            res.render("list", { title: "Listado", customers })
        } catch (error) {
            console.log(error)
            res.render("list", { title: "Listado", customers: [] })
        }
    },

    //@GET  Buscar el usuario a modificar
    getUpdate: async (req, res) => {
        try {
            const id = (req.params.customer_id)

            const usuarioAModificar = await db.Customer.findByPk(id)

            res.render("updateUser", { customer: usuarioAModificar });

        } catch (error) {
            console.log(error)
            return res.send("Es posible que el usuario buscado no exista")
        }
    },

    // @ PUT actualizamos el usuario con PUT ! 
    updateUser: async (req, res) => {

        const nuevosDatos = req.body
        try {

            const id = (req.params.customer_id);

            nuevosDatos.image = req.file.filename/* req.file ? req.file.filename : req.body.oldImag */

            await db.Customer.update(nuevosDatos, {
                where: {
                    customer_id: id
                }
            });

            res.redirect("/user/list");

        }
        catch (error) {
            console.log(error)
            res.send("No se pudo actualizar, intente nuevamente")
        }
    },

    // @DELETE borrar usuario segun ID //
    deleteUser: async (req, res) => {
        try {
            let customer_id = (req.params.customer_id)
            const deleted = await db.Customer.destroy({
                where: {
                    customer_id: customer_id
                }
            });
            res.redirect("/user/list");
        } catch (error) {
            console.log(error)
            res.send("No se pudo borrar, intente nuevamente")
        }

    },

    signOut: (req, res) => {

        req.session.destroy();

        res.clearCookie('customer_email');

        res.redirect('/user/login');
    },

    registerUser:  async (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render("registro", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }
        delete req.body.confirmPassword;

        try {

             let newData = req.body; 
             let newPassword =  bcrypt.hashSync(req.body.password, 12);

            const newCustomer = await db.Customer.create({
                customer_name: newData.customer_name,
                customer_lastName: newData.customer_lastName,
                customer_birthdate: newData.customer_birthdate,
                customer_country: newData.customer_country,
                customer_phone:  Number(newData.customer_phone),
                customer_email: newData.customer_email,
                customer_gender: newData.customer_gender,
                customer_type: newData.customer_type,
                password:newPassword,
                image: req.file.filename  /*  newData.image *//* '/img/products/' +  req.file.filename  */



            });

            console.log(newCustomer)


            res.redirect("/user/list");

        } catch (error) {
            console.log(error);
            res.send("No se pudo crear el usuario, intente nuevamente");
        }

    },
    
    
    
    /* async (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render("registro", {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        delete req.body.confirmPassword;

        try {
             let userInDB = await db.Customer.findOne(req.body.customer_email);
            if (userInDB) {
                return res.render("registro", {
                    errors: {
                        msg: "Este mail ya está registrado",
    
                    }, oldData: req.body
                },
                )
            } 
            const customer = req.body;
            



            const newPassword = await bcrypt.hashSync(req.body.password, 12);


            customer.password = newPassword
            await db.Customer.create(customer);

            res.redirect('/user/list');

        } catch (error) {
            console.log(error)
            res.send("Intente nuevamente")
        }


    }, */

    loginUser: async (req, res) => {

        const customer_email = (req.body.customer_email)

        try {

            const searchedUser = await db.Customer.findOne(
                {
                    where: { customer_email: customer_email }, 
                    raw: true
                }
            );

            if (!searchedUser) {
                return res.redirect('/user/login?error=El mail o la contraseña son incorrectos');
            }
            const { password } = searchedUser;
            console.log(searchedUser)
            const comparePW = bcrypt.compareSync(req.body.password, password);

            if (comparePW) {
                if (req.body.remember) {
                    res.cookie('customer_email', searchedUser.customer_email, {
                        maxAge: 1000 * 60 * 60 * 24 * 365
                    });
                } else {
                    res.cookie('customer_email', searchedUser.customer_email, { maxAge: 1000 * 60 * 60 * 2 });
                }

                delete searchedUser.customer_password;
                delete searchedUser.customer_id;

                req.session.userLogged = searchedUser;

                return res.redirect('/');
            } else {
                return res.redirect('/user/login?error=La contraseña es incorrecta');
            }
        }
        catch (error) {
            console.log(error);
            res.send("Intente nuevamente")
        }

    },
    profile: (req, res) => {
        return res.render('userProfile', {
            customer: req.session.userLogged
        });
    }


}
module.exports = controllers;



/*const controllers = {
    signOut: (req, res) => {
        res.clearCookie('email');

        req.session.user = {};

        res.redirect('/users/login');
    },

    getRegister: (req, res) => {
        res.render('registro');
    },


    getLogin: (req, res) => {
        const error = req.query.error || '';

        res.render('login', {error});
    },
    
    loginUser: (req, res) => {
        const searchedUser = userModel.findByEmail(req.body.email);

        
        if(!searchedUser){
            return res.redirect('/users/login?error=El mail o la contraseña son incorrectos');
        }
        
        const {password: hashedPw} = searchedUser;
        const isCorrect = bcrypt.compareSync(req.body.password, hashedPw);
        
        if(isCorrect){
            if(!!req.body.remember){
                res.cookie('email', searchedUser.email, {
                    maxAge: 1000 * 60 * 60 * 24 * 360 * 9999
                });
            }

            delete searchedUser.password;
            delete searchedUser.id;

            req.session.user = searchedUser;

            res.redirect('/');
        } else {
            return res.redirect('/users/login?error=El mail o la contraseña son incorrectos');
        }
    } /*
}

module.exports = controllers; */