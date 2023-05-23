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


app.listen(2000, () =>{
    console.log("Servidor corriendo en el puerto 2000");
});