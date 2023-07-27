const fs = require("fs")
const uuid = require("uuid")
const path = require("path");
const bcrypt = require("bcrypt")
const {validationResult} = require ("express-validator")
const userModel = require('../models/user');

const controllers = {

    getRegistro: (req, res) => {

        res.render("registro", { title: "registro" })
    },
    getLogin: (req, res) => {
        const error = req.query.error || "";

        res.render("login", { title: "login", error })
    },
    getList: (req, res) => {
        const usuarios = userModel.findAll();

        res.render("list", { title: "Listado", usuarios })
    },

    //@GET  Buscar el usuario a modificar
    getUpdate: (req, res) => {
        const id = (req.params.id)

        const usuarioAModificar = userModel.findById(id)
        if (!usuarioAModificar) {
            return res.send("El id no existe")
        }
        res.render("updateUser", { user: usuarioAModificar });

    },
    // @ PUT actualizamos el usuario con PUT ! 
    updateUser: (req, res) => {
        const id = (req.params.id);
        let newData = req.body;
        /* const newPassword = bcrypt.hashSync(newData, password, 12)
        newData.password = newPassword */ 
        delete newData.oldImage;
        newData.img = req.file ? req.file.filename : req.body.oldImage

        let users = userModel.updateById(id, newData);

        res.redirect("/user/list",/* {users} */);

    },
    // @DELETE borrar usuario segun ID //
    deleteUser: (req, res) => {
        const id = (req.params.id);

        let users = userModel.deleteById(id);

        res.redirect("/user/list");
    },

    signOut: (req, res) => {

        req.session.destroy();

        res.clearCookie('email');

        res.redirect('/user/login');
    },
   
    registerUser: (req, res) => {
        const resultValidation= validationResult(req);
        if(resultValidation.errors.length > 0) {
            return res.render("registro", {
                errors: resultValidation.mapped(), 
                oldData: req.body
            });
        }
        let userInDB = userModel.findByEmail(req.body.email);  
        if( userInDB){
            return res.render("registro",{
                errors: {
                    msg: "Este mail ya está registrado",
                    
                }, oldData: req.body
            },
           )
        }
        const user = req.body;
        delete user.confirmPassword;

        const newPassword = bcrypt.hashSync(user.password, 12);

        user.password = newPassword
        userModel.createOne(user);
        console.log(user)
        res.redirect('/user/list');

    }, 
    
    loginUser(req, res) {
        const searchedUser = userModel.findByEmail(req.body.email);

        if (!searchedUser) {
            return res.redirect('/user/login?error=El mail o la contraseña son incorrectos');
        }
        const { password: hashedPW } = searchedUser;

        const comparePW = bcrypt.compareSync(req.body.password, hashedPW);

        if (comparePW) {
            if (req.body.remember) {
                res.cookie('email', searchedUser.email, {
                    maxAge: 1000 * 60 * 60 * 24 * 365
                });
            } else {
                res.cookie('email', searchedUser.email, { maxAge: 1000 * 60 * 60 * 2 });
            }

            delete searchedUser.password;
            delete searchedUser.id;

            req.session.userLogged = searchedUser;

            return res.redirect('/');
        } else {
            return res.redirect('/user/login?error=La contraseña es incorrecta');
        }
    },
    profile: (req, res) => 
    {return res.render('userProfile', {
			user: req.session.userLogged
		});
	} 
   /*  loginUser: (req, res) => {
        const searchedUser = userModel.findByEmail(req.body.email);
    
    
        if(!searchedUser){
            return res.redirect('/user/login?error=El mail o la contraseña son incorrectos');
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
            return res.redirect('/user/login?error=El mail o la contraseña son incorrectos');
        }
    }, */
    /* loginUser: (req, res) => 
     {
        const searchedUser = userModel.findByEmail("email", req.body.email);

        if (isCorrect) {
            if (!!req.body.remember) {
                res.cookie('email', searchedUser.email, {
                    maxAge: 1000 * 60 * 60 * 24 * 360 * 9999
                });
            }

            delete searchedUser.password;
            delete searchedUser.id; 

            req.session.user = searchedUser;

            res.redirect('/');
        } else {
            return res.redirect('/user/login?error=El mail o la contraseña son incorrectos');
        } 
    } */



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