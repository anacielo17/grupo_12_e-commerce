const path = require("path");

const registroController =
{

    getRegistro: (req, res) => {
        
        res.render("registro", { title: "registro" })
    },
    getLogin: (req, res) => {

        res.render("login", { title: "login" })
    }


}
module.exports = registroController;