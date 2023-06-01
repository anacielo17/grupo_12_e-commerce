const express = require("express");

const multer = require ("multer");

const productsRoutes = express.Router();


const productsController = require ("../controllers/productsController");

const storage = multer.diskStorage({
    destination: (req,file,cb)=> {
        cb(null,"./public/img/products") //carpeta donde se guardan las imagenes, cree products para mover imagenes que vamos a usar en la lista ydemas 

    },
    filename: (req,file,cb)=> {
        cb(null, Date.now() + "-" + file.originalname)
    }
}
)

const upload = multer({storage});


productsRoutes.get("/carrito-compra", productsController.getCarrito)
productsRoutes.get("/catalogo", productsController.getCatalogo); // si catalogo no es lo mismo que lista de productos, hacer nueva ruta
productsRoutes.get("/create", productsController.getCreate)  
productsRoutes.get("/:id", productsController.productDetail) // detalle de producto, falta realizar la vista
productsRoutes.get("/:id/edit", productsController.getUpdate) // vamos al form de edicion 
productsRoutes.put("/:id", productsController.updateProduct) // put , accion de edicion, enviamos el formulario
productsRoutes.delete("/:id", productsController.deleteProduct)
productsRoutes.post("/", upload.single(imagenProducto), productsController.postProduct); // creamos un nuevo producto 
module.exports = productsRoutes;