const path = require("path");


const productsController = {

    getCarrito: (req, res) => {
        
        res.render("carrito-compra", { title: "carrito" })
    },


    getCatalogo: (req, res) => {
            
            res.render("catalogo", { title: "catalogo" })
        },
    getFormulario: (req, res) => {
        res.render("formulatioProducto", {title: "formulrio"})
    }
    }

    module.exports = productsController;