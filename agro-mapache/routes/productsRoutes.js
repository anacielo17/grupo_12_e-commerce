const express = require("express");

const multer = require ("multer");

const productsRoutes = express.Router();

const productsController = require ("../controllers/productsController");
const productValidations= require ("../middlewares/productValidations")

const storage = multer.diskStorage({
    destination: (req,file,cb)=> {
        cb(null,"./public/img/products") //cnparpeta donde se guardan las imagenes, cree products para mover imagenes que vamos a usar en la lista ydemas 

    },
    filename: (req,file,cb)=> {
        cb(null, Date.now() + "-" + file.originalname)
    }
}
)
 
const upload = multer({storage});


productsRoutes.get("/carrito-compra", productsController.getCarrito)
productsRoutes.get("/catalogo", productsController.getCatalogo); // si catalogo no es lo mismo que lista de productos, hacer nueva ruta
productsRoutes.get("/createProduct", productsController.getCreate)  
productsRoutes.get("/:product_id/detail", productsController.productDetail) // detalle de producto, falta realizar la vista
productsRoutes.get("/:product_id/update", productsController.getUpdate) // vamos al form de edicion 
productsRoutes.put("/:product_id/update", upload.single('image'), productsController.updateProduct) // put , accion de edicion, enviamos el formulario
productsRoutes.delete("/:product_id/delete", productsController.deleteProduct)
productsRoutes.post("/catalogo", upload.single('image'),productValidations, productsController.postProduct);   
module.exports = productsRoutes;  