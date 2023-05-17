const path = require("path");

const catalogoController = {
    getCatalogo :
    
    (req,res) =>{
        res.sendFile(path.join(__dirname, "../views/catalogo.html"))
    }
}

module.exports = catalogoController;
