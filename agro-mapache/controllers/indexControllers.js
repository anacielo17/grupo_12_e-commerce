const path = require("path");


const indexController = {

    getIndex: (req, res) => {
        let userData= req.session.user;
        if(!userData){
            userData = {}
        }
         
        res.render("index", { title: "index", userData});
    },

    getContact: (req, res) => {
        res.render("contact", { title: "contact" })
    }

}


module.exports = indexController; 