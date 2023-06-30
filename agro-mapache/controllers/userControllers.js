const path = require("path");
const userModel = require('../models/user.js');
const controllers =
{

    getRegistro: (req, res) => {
        
        res.render("registro", { title: "registro" })
    },
    getLogin: (req, res) => {

        res.render("login", { title: "login" })
    },
    getList: (req, res) => {
        const listado = userModel.findAll();

        res.render("list", { title:"Listado", listado })
    },
    //@GET  Buscar el usuario a modificar
    getUpdate: (req, res) => {
        const id = Number(req.params.id)
        console.log(id)
        const usuarioAModificar = userModel.findById(id)
        if (!usuarioAModificar) {
            return res.send("El id no existe")
        }
        res.render("updateUser", {user: usuarioAModificar});

    },
     // @DELETE borrar usuario segun ID //
    deleteUser: (req,res)=>{
        const id= Number(req.params.id);

        userModel.deleteById(id) ;

        res.redirect("list") 
    },
    // @ PUT actualizamos el usuario con PUT ! 
    updateUser: (req, res)=> {
        const id= Number (req.params.id);     
       let nuevosDatos = req.body;
       nuevosDatos.img= req.file ? req.file.filename : req.body.oldImage
       
       userModel.updateById(id,nuevosDatos);
   
       res.redirect("list");
   
   },

   // @POST/ products
  /*  postUser:(req, res) => {
       let datos = req.body;
       datos.phone = Number(datos.phone);
          // datos.imgs = req.files.map(file => '/imgs/products' + file.filename); puede faltar una barra despue d products 
       datos.avatar =  '/img/products/' + req.file;
       datos.email= 
      
       productModel.createOne(datos);
       res.redirect("/user/list");
   }
     */


}
module.exports = controllers;//

/* const bcrypt = require('bcrypt');

const controllers = {
    signOut: (req, res) => {
        res.clearCookie('email');

        req.session.user = {};

        res.redirect('/users/login');
    },

    getRegister: (req, res) => {
        res.render('registro');
    },

    registerUser: (req, res) => {
        const user = {
            ...req.body
        };

        const newPassword = bcrypt.hashSync(user.password, 12);

        user.password = newPassword;

        userModel.createOne(user);

        res.send('Se registró el usuario');
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
    }
}

module.exports = controllers */  