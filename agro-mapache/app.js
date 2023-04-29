const express = require("express");
const app = express();

const path = require("path");

app.use(express.static("public"));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "./views/index.html"))
});

app.listen(2000, () =>{
    console.log("Servidor corriendo en el puerto 2000");
});