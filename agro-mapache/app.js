const express = require("express");
const app = express();
const path = require ("path");
const methodOverride = require('method-override');
const cookieParser= require("cookie-parser")
const expressSession = require ("express-session");




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

//Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser()); 
app.use(expressSession({ secret: "Para qué un juicio final si ya estamos desechos" }));
app.use((req,res,next)=>{
    if(req.cookies.email){
     const userModel = require ("./models/user");
     const user = userModel.findByEmail(req.cookies.email)
     delete user.id;
     delete user.password;
     req.session.user= user; 
    }
    next()
} )

// Routes
app.use(indexRoutes);
app.use("/user",userRoutes);
app.use("/products",productsRoutes);


app.listen(3000, () =>{
    console.log("Servidor corriendo en el puerto 3000");
});  
