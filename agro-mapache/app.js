const express = require("express");
const app = express();

const path = require ("path");

const mainRoutes = require("./routes/index.js");
const catalogoRoutes = require("./routes/catalogo.js");
const carritoRoutes = require("./routes/carrito-compras.js");
const registroRoutes = require("./routes/registro.js");
const loginRoutes = require("./routes/login.js");
 
app.use(registroRoutes);
app.use(mainRoutes);
app.use(catalogoRoutes);
app.use(carritoRoutes);
app.use(loginRoutes);


app.use(express.static("public"));





app.listen(2000, () =>{
    console.log("Servidor corriendo en el puerto 2000");
});