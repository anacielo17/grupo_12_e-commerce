const fs= require("fs");
const path = require("path");
const model={
    deleteById: function (id){
        const products= this.findAll();
        const buscar = productos.find(productos=> productos.id !==id); 
        const productsJSON= JSON.stringify(products); 
        fs.writeFileSync(path.join(__dirname, this.route), productsJSON); 
        return products;
    } 
}
