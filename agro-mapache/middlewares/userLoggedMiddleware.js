
let db = require("../database/models");
const Op = db.Sequelize.Op


const User = require('../models/user');
async function userLoggeMiddleware(req, res, next) {
try{
     res.locals.isLogged = false

     let emailInCookie = req.cookies.customer_email;
     if(!emailInCookie){
        return next()
     }
    let userFromCookie = await db.Customer.findOne(
        {
            where : {
                customer_email: emailInCookie
            }
        
    });  
    




    if (userFromCookie) {
        req.session.userLogged = userFromCookie
    }

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLogged

    }
    next();
} catch (error){
    console.log (error); 
    res.send ("Hubo un error")
}
    
}
module.exports = userLoggeMiddleware