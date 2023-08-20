const path = require("path");

// Sequelize
let db = require("../database/models")


const { validationResult } = require("express-validator")
const productModel = require("../models/product");
const multer = require("multer");
const { param } = require("express-validator");



const productsController = {

    getCarrito: (req, res) => {


        res.render("carrito-compra", { title: "carrito" })
    },



    // Muestra todos los productos
    getCatalogo: async (req, res) => {
        try {
            const products = await db.Product.findAll({
                raw: true,
                 nest : true,   
                 include: [{
                    association:"brand"
                 },
                    {
                    association: "category"
                }   ]
                    
                
                
            });
           /*  console.log(products) */
            res.render("catalogo", { title: "catalogo", products })
        } catch (error) {
            console.log(error)
            res.render("catalogo", { title: "catalogo", products: [] })
        }
       
    },



    //@GET  Buscar el producto a modificar
    getUpdate: async (req, res) => {
        try {
            let id = Number(req.params.product_id);
            const productoAModificar = await db.Product.findByPk(id);
            
            res.render("update", { product: productoAModificar })
        } catch (error) {
            return res.send("El id no existe")
        }
    },


    // @GET detalle del producto por el ID
    productDetail: async (req, res) => {
        try {
            let id = Number(req.params.product_id)
            const productAMostrar = await db.Product.findByPk(id);
            /* if (!productAMostrar) {
                return res.send("El id no existe")
            } */
            res.render("detail", { title: "detalle", product: productAMostrar })
        } catch (error) {
            res.send("El id no existe")
        }
    },

    // @DELETE borrar producto segun ID // 

    deleteProduct: async (req, res)  => {
        
        try{
           let product_id = Number(req.params.product_id) 
            const deleted = await db.Product.destroy({
                where : {
                    product_id : product_id
                }
            }); 
            res.redirect("/products/catalogo")
        } catch (error){
            console.log(error)
            res.send("No se pudo borrar, intente nuevamente") 
        }
       
    },

    // @ PUT actualizamos el protucto con PUT ! 
    updateProduct: async (req, res) => {
       

        const nuevosDatos = req.body
        try {

            const id = Number(req.params.product_id);

         nuevosDatos.image = req.file.filename  

            await db.Product.update(nuevosDatos, {
                where: {
                    product_id: id
                }
            });
            
            res.redirect("/products/catalogo");

        }

       catch (error) {
        console.log(error)
            res.send("No se pudo actualizar, intente nuevamente")
        }

    },

    //@GET / products/create nos lleva al formulario createProducts.ejs
    getCreate: (req, res) => {
        res.render("createProduct", { title: "formulario", errors: [], values: [] })
    },

    // @POST/ products
    postProduct: async (req, res) => {
         const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render("createProduct", {
                errors: resultValidation.mapped(),
                oldData: req.body,
                oldFile: req.file
            });
        } 

        try {

             let newData = req.body; 

            let newProduct = await db.Product.create({
                name: newData.name,
                description: newData.description,
                product_InStock: Number(newData.product_inStock),
                product_price: Number( newData.product_price),
                product_date: newData.product_date,
                origin: newData.origin,
                brand_code: newData.brand_code,
                product_category: Number(newData.product_category),
                product_condition: newData.product_condition,
                image: req.file.filename, 
                product_discount : newData.product_discount  /*  newData.image *//* '/img/products/' +  req.file.filename  */



            });

            console.log(newProduct)


            res.redirect("/products/catalogo");

        } catch (error) {
            console.log(error);
            res.send("No se pudo crear el producto, intente nuevamente");
        }

    }


}

module.exports = productsController