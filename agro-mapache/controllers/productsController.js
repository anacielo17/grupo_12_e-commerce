const path = require("path");


const productsController = {

    getCarrito: (req, res) => {
        
        res.render("carrito-compra", { title: "carrito" })
    },


    getCatalogo: (req, res) => {
            
            res.render("catalogo", { title: "catalogo" })
        }

    }

    module.exports = productsController;