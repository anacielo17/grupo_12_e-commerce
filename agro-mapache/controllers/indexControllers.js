const path = require("path");

// Sequelize
let db = require("../database/models")
const { Op } = require('sequelize');

const indexController = {

    getIndex: async (req, res) => {
        try {
            const products = await db.Product.findAll({
                raw: true,
                nest: true,
                include: [{
                    association: "brand"
                },
                {
                    association: "category"
                }]



            });
            /*  console.log(products) */
            res.render("index", { title: "index", products })
        } catch (error) {
            console.log(error)
            res.render("index", { title: "index", products: [] })
        }

    },
    getSearch: async (req, res) => {

        try {

            let query = req.query.search;

            console.log(query)

            const products = await db.Product.findAll({
                raw: true,
                nest: true,
                where: {
                    name: { [Op.like]: `%${query}%` }
                }
            });

           

            if (products.length === 0) {

                return res.render('catalogo', { products, message: 'No se encontraron productos.' });
            } else {

                return res.render('catalogo', { products });
            }


        } catch (error) {
            console.log(error);
        }
    },

    getContact: (req, res) => {
        res.render("contact", { title: "contact" })
    }

}


module.exports = indexController; 