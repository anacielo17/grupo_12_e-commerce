const express = require("express");
const app = express();
const path = require ("path");
const methodOverride = require('method-override');

const indexRoutes = require("./routes/indexRoutes.js");
const productsRoutes = require("./routes/productsRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

app.set("view engine", "ejs") ;
app.set("views", [
    path.join(__dirname, "./views/main"),
    path.join(__dirname, "./views/products"),
    path.join(__dirname, "./views/user"),
    path.join(__dirname, "./viwes/partials")
]);

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));


app.use(indexRoutes);
app.use("/user",userRoutes);
app.use("/products",productsRoutes);


app.listen(3000, () =>{
    console.log("Servidor corriendo en el puerto 3000");
});
/* 
Crear rutas necesarias del CRUD en productRoutes.js (estan en sprint 4)
crear controllers necesarios (regla basica: .get hacen render y los otros hacen segun corresponda (delete,put) 
(get necesitan fs.readFileSinc))
escribir controller de POST de productos (fs.writeFileySinc-productos .push) 
escribir controllessr de PUT de productos (fs.writeFileySinc- productos.findIndex) 
escribir controller de DELETE de productos (fs.writeFileySinc- productos.filter)

// hecho creo//

//falta hacer//
agregar detalle del producto, update product y create product
agregar vista de edicion (similar a formulario de creacion).

Deje comentado produtDetail para poder ver el html y tambien dejé comentado productosRoutes
*/
//Eliminar producto y buscar producto por id ya funciona, falta la funcion de editar y crear el css de update