const path = require("path");
const productModel = require("../models/product");


const productsController = {

     getCarrito: (req, res) => {

        res.render("carrito-compra", { title: "carrito" })
    },



    // catalogo es lo mismo que listado de productos? SI JAJA
    getCatalogo: (req, res) => { 
        const productos=[
            { 
            id:1,
            price: 12123,
            name: "Hacha de camping Bahco",
            img:"/img/hacha_de_camping.png",
        },
        { 
            id:2,
            price: 24589,
            name: "Hacha de pico Bahco Mango Fibra Vidrio",
            img:"/img/hacha_de_pico.png",
        },
        { 
            id:3,
            price: 104620,
            name: "Motosierra Niwa",
            img:"/img/motosierra_niwa.png",
        },
        { 
            id:4,
            price: 7049916,
            name: "Autoelevador Diesel Motor Chino 3000kg",
            img:"/img/autoelevador_diesel.jpg",
        },
        { 
            id:5,
            price: 8500000,
            name: "Acoplado Tanque 3000 Lts Conese",
            img:"/img/acoplado_tanque.jpg"
        },
        { 
            id:6,
            price: 4649840,
            name: "Moledora Mixer Loyto Nº6/V-3500 C/sinfin De Descarga Rigido",
            img:"/img/moledora_mixer.jpg",
        },
        { 
            id:7,
            price: "Precio a consultar",
            name: "Moledora Mixer Loyto Nº6/V-3500 C/sinfin De Descarga Rigido",
            img:"/img/moledora_mixer.jpg"
        },
        { 
            id:8,
            price: "Precio a consultar",
            name: "Casilla 5x2.60mts, 2 ejes, 1 habitación",
            img:"/img/casilla.jpg",
        },
        
        ]

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
       /*  const id = Number(req.params.id)
        const productoAMostrar = productModel.findById(id)
        if (!productoAMostrar) {
            return res.send("El id no existe")
        } */
        res.render("detail", { title: "detalle"/* , product: productoAMostrar  */})
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
    res.render("createProduct", { title: "formulario" })
},
 
// @POST/ products
/* postProduct:(req, res) => {
    let datos = req.body;
    datos.price = Number(datos.price);
    datos.file = "/img/products" + req.file.filename;
    productModel.createOne(datos);
    res.redirect("/products");
}
 */

}

module.exports = productsController