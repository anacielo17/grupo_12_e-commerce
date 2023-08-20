const path = require("path");

// Sequelize
let db = require("../database/models")


const indexController = {

    getIndex: async (req, res) =>   { 
    try {
        const products = await db.Product.findAll({
            raw: true,
             nest : true,   
             include: [{
                association:"brand"
             },
                {
                association: "category"
            }   ]
                
            
            
        });
       /*  console.log(products) */
        res.render("index", { title: "index", products })
    } catch (error) {
        console.log(error)
        res.render("index", { title: "index", products: [] })
    }
   
},

    getContact: (req, res) => {
        res.render("contact", { title: "contact" })
    }

}


module.exports = indexController; 