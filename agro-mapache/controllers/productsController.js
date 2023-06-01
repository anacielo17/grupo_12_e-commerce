const path = require("path");
const productModel = require("../models/product");


const productsController = {

     getCarrito: (req, res) => {

        res.render("carrito-compra", { title: "carrito" })
    },



    // catalogo es lo mismo que listado de productos? 
    getCatalogo: (req, res) => {

        res.render("catalogo", { title: "catalogo" })
    },

   

    //@GET  Buscar el producto a modificar
    getUpdate: (req, res) => {
        const id = Number(req.params.id)
        const productoAModificar = productModel.findById(id)
        if (!productoAModificar) {
            return res.send("El id no existe")
        }
        res.render("updateProduct", {product: productoAModificar});

    },
    
    // @GET detalle del producto por el ID
    productDeteail: (req, res) => {
        const id = Number(req.params.id)
        const productoAMostrar = productModel.findById(id)
        if (!productoAMostrar) {
            return res.send("El id no existe")
        }
        res.render("detail", { title: "detalle", product: productoAMostrar })
    },
    
    // @DELETE borrar producto segun ID
    deleteProduct: (req,res)=>{
        const id= Number(req.params.id);

        productModel.deleteById(id) ;

        res.redirect("/products")
    },  

   // @ PUT actualizamos el protucto con PUT ! falta realizar la vista de acutalizacion de productos 
    updateProduct: (req, res)=> {
    let nuevosDatos = req.body;
    productModel.updateById(id,nuevosDatos);

    res.redirect("/products");

},

//@GET / products/create nos lleva al formulario createProducts.ejs
getCreate: (req, res) => {
    res.render("createProduct", { title: "formulrio" })
},
 
// @POST/ products
postProduct:(req, res) => {
    let datos = req.body;
    datos.price = Number(datos.price);
    datos.file = "/img/products" + req.file.filename;
    productModel.createOne(datos);
    res.redirect("/products");
}


}

module.exports = productsController