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
        console.log(id)
        const productoAModificar = productModel.findById(id)
        if (!productoAModificar) {
            return res.send("El id no existe")
        }
        res.render("update", {product: productoAModificar});

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
   
    deleteProduct: (req,res)=>{
        const id= Number(req.params.id);

        productModel.deleteById(id) ;

        res.redirect("/products/catalogo")
    },  

   // @ PUT actualizamos el protucto con PUT ! falta realizar la vista de acutalizacion de productos 
    updateProduct: (req, res)=> {
     const id= Number (req.params.id);     
    let nuevosDatos = req.body;
    nuevosDatos.img= req.file ? req.file.filename : req.body.oldImage
    
    productModel.updateById(id,nuevosDatos);

    res.redirect("/products/catalogo");

},

//@GET / products/create nos lleva al formulario createProducts.ejs
getCreate: (req, res) => {
    res.render("createProduct", { title: "formulario" })
},
 
// @POST/ products
postProduct:(req, res) => {
    let datos = req.body;
    datos.price = Number(datos.price);
       // datos.imgs = req.files.map(file => '/imgs/products' + file.filename); puede faltar una barra despue d products 
       datos.imgs =  '/imgs/products/' + req.file 
   
    productModel.createOne(datos);
    res.redirect("/products/catalogo");
}
 

}

module.exports = productsController