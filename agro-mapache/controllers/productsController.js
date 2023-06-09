const path = require("path");
const productModel = require("../models/product");


const productsController = {

     getCarrito: (req, res) => {
        

        res.render("carrito-compra", { title: "carrito" })
    },



    // catalogo es lo mismo que listado de productos? SI JAJA k t reis pt 
    getCatalogo: (req, res) => { 
        const productos = productModel.findAll();

        res.render("catalogo", { title: "catalogo", productos });
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
    productDetail: (req, res) => {
        const id = Number(req.params.id)
        const productoAMostrar = productModel.findById(id)
        if (!productoAMostrar) {
            return res.send("El id no existe")
        } 
        res.render("detail", { title: "detalle", product: productoAMostrar  })
    },
    
    // @DELETE borrar producto segun ID // 
   /*  te va pedir instalar la libreria method-override que que para que sobre-escriba el post y funcione el eliminar producto. 
   YA FUNCIONA ASI QUE NO BORRES NADA  */
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
    res.render("createProduct", { title: "formulario" })
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