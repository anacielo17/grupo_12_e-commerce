const path = require("path");


const indexController = {

    getIndex: (req,res) =>{
        res.sendFile(path.join(__dirname, "../views/index.html"))

    }
}

module.exports = indexController; 