const User = require('../models/user');
function userLoggeMiddleware(req, res, next) {

    res.locals.isLogged = false
    let emailInCookie = req.cookies.email;
    let userFromCookie = User.findByEmail("email", emailInCookie); 
    
    if (userFromCookie) {
        req.session.userLogged = userFromCookie
    }

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLogged

    }
    next(); 
}
module.exports = userLoggeMiddleware