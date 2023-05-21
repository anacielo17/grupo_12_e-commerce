const path = require("path");


const indexController = {

    getIndex: (req,res) =>{
       /*  res.sendFile(path.join(__dirname, "../views/index.html")) */
       res.render ("index", {title:"index"});
    

    }
}

module.exports = indexController; 