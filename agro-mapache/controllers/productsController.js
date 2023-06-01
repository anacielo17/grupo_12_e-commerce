const path = require("path");
/* let productos= {
    id:
    title: 
    price: 
    description: 
    image: 
    category: 
    colours:  
} */


const productsController = {

    getCarrito: (req, res) => {
        
        res.render("carrito-compra", { title: "carrito" })
    },


    getCatalogo: (req, res) => {
            
            res.render("catalogo", { title: "catalogo" })
        },
    getFormulario: (req, res) => {
        res.render("formulatioProducto", {title: "formulrio"})
    }, 
    postCreate: (req,res)=>{
        let datos= req.body; 
        datos.id= productos.length +1; 
        productos.push(datos)
        res.json(productos);
    },
    getId: (req,res)=>{
        const id= Number(req.params.id), 
        const productoAMostrar = productos.find(id),
        if(!productoAMostrar){
            return res.send("El producto no existe")
        } 
        res.render ("detail", {title: "detalle", product: productoAMostrar})
        },
 /*     getEdit: (req,res)=>{
    
   
    },
    deleteProduct: (req,res)=>{
        const id= Number(req.params.id),
        const productsABorrar = products.filter(id) 
        res.redirect
    } */ }
 
    module.exports = productsController;