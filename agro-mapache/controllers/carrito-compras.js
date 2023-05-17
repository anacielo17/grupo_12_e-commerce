const path = require("path");


const carritoController = {

    getCarrito: (req,res) =>{
        res.sendFile(path.join(__dirname, "../views/carrito-compras.html"))

    }
}

module.exports = carritoController; 