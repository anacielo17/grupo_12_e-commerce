const express = require("express");
const multer = require("multer")
const userRoutes = express.Router();
const path = require("path");

const controllers = require("../controllers/userControllers");
const userValidations = require("../middlewares/userValidations") 

const authMiddleware = require('../middlewares/authMiddleware');
const sellerMiddleware = require ("../middlewares/updateMiddleware")
const guestMiddleware = require("../middlewares/guestMiddleware")




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img/user')
    },
    filename: (req, file, cb) => {
        cb(null, "user-" + Date.now() + '-' + file.originalname)

    }
});
const upload = multer({ storage });

userRoutes.get("/login", guestMiddleware, controllers.getLogin);
userRoutes.get("/registro", guestMiddleware, controllers.getRegistro)
userRoutes.get("/list", [authMiddleware,sellerMiddleware], controllers.getList);
userRoutes.get("/profile/", authMiddleware, controllers.profile);
userRoutes.get("/sign-out", controllers.signOut);
userRoutes.get("/:customer_id/update", controllers.getUpdate) // vamos al form de edicion 


userRoutes.post("/registro", [upload.single('image'), ...userValidations], controllers.registerUser);
userRoutes.post("/login", controllers.loginUser);
userRoutes.put("/:customer_id/update", upload.single('image'), controllers.updateUser) // put , accion de edicion, enviamos el formulario
userRoutes.delete("/:customer_id/delete", controllers.deleteUser)
module.exports = userRoutes;

