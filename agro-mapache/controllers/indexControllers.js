const path = require("path");


const indexController = {

    getIndex: (req, res) => {
        
        res.render("index", { title: "index" })
    },

    getContact: (req, res) => {
        res.render("contact", { title: "contact" })
    }

}


module.exports = indexController; 