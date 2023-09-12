const db = require("../database/models");

async function sellerMiddleware(req, res, next) {
  try {
    //  si el usuario está autenticado
    if (!req.session || !req.session.userLogged) {
		return res.redirect("/");
    }

    const user = req.session.userLogged;

    
    if (user.customer_type === "Vendedor") {
      // Si es un "Vendedor", se le permite editar y crear productos
      next();
    } else {
		return res.redirect("/");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Hubo un error interno" });
  }
}

module.exports = sellerMiddleware;
 