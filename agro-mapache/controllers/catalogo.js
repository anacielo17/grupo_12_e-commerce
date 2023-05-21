const path = require("path");

const catalogoController = {
    getCatalogo :
    
    (req,res) =>{
        /* res.sendFile(path.join(__dirname, "../views/catalogo.html")) */ 
        res.render("catalago", {title: "catalago"})
    }
}

module.exports = catalogoController;
