const path = require ("path");

const registroController = 
 {

    getRegistro:(req,res) => {
 /*    res.sendFile(path.join(__dirname, "../views/registro.html")) */
 res.render("registro",{title:"registro"})
}
}
module.exports = registroController;