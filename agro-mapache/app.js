const express = require("express");
const app = express();
const path = require ("path");

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



app.use("/user",userRoutes);
app.use("/home",indexRoutes);
app.use("/products",productsRoutes);




app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.listen(2000, () =>{
    console.log("Servidor corriendo en el puerto 2000");
});
/* 
Crear rutas necesarias del CRUD en productRoutes.js (estan en sprint 4)
crear controllers necesarios (regla basica: .get hacen render y los otros hacen segun corresponda (delete,put) 
(get necesitan fs.readFileSinc))
escribir controller de POST de productos (fs.writeFileySinc-productos .push) 
escribir controller de PUT de productos (fs.writeFileySinc- productos.findIndex) 
escribir controller de DELETE de productos (fs.writeFileySinc- productos.filter) 
agregar detalle del producto
agregar vista de edicion (similar a formulario de creacion).
definir lista de productos 

*/