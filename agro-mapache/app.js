const express = require("express");
const app = express();
const path = require ("path");
const methodOverride = require('method-override');
const cookieParser= require("cookie-parser")
const expressSession = require ("express-session");
const userLoggeMiddleware = require("./middlewares/userLoggedMiddleware")
const userValidations = require("./middlewares/userValidations") 
const db = require("./database/models")
const cors = require("cors");





const indexRoutes = require("./routes/indexRoutes.js");
const productsRoutes = require("./routes/productsRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const apiRoutes = require("./routes/api")


app.set("view engine", "ejs") ;
app.set("views", [
    path.join(__dirname, "./views/main"),
    path.join(__dirname, "./views/products"),
    path.join(__dirname, "./views/user"),
    path.join(__dirname, "./viwes/partials")
]);

//Middlewares
app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser()); 
app.use(expressSession({ secret: "Para qué un juicio final si ya estamos desechos", 
                        resave: false, 
                        saveUninitialized: false }));
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
app.use(userLoggeMiddleware);
// Routes
app.use(indexRoutes);
app.use("/user",userRoutes);
app.use("/products",productsRoutes);
app.use('/api', apiRoutes)


app.listen(3001, () =>{
    console.log("Servidor corriendo en el puerto 3000");
});  
