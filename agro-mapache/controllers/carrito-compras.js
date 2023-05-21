const path = require("path");


const carritoController = {

    getCarrito: (req,res) =>{
       /*  res.sendFile(path.join(__dirname, "../views/carrito-compras.html")) */
       res.render("carrito-compras", { title: "carrito"})

    }
}

module.exports = carritoController; 