const fs = require("fs");
const path = require("path");

const model = {
    // ruta del archivo JSON
    route: "../data/products.json",
    // traer los productos
    findAll: function () {
        const productsJson = fs.readFileSync(path.join(__dirname, this.route), "utf-8");

        const products = JSON .parse(productsJson);

        return products;

    },
    //Traer un producto segun su ID
    findById: function (id) {
        const products = this.findAll();

        let searched = products.find( product => product.id === id)

        if(!searched) {
            searched = null
        }

        return searched ;
    },
    //Eliminar un producto
    deleteById: function (id) {
        let products = this.findAll();

        products = products.filter( product => product.id !== id);

        const productsJson = JSON.stringify(products);

        fs.writeFileSync(path.join(__dirname,this.route), productsJson);

        return products ;

    },
   
    // Editar un producto
    updateById: function (id,newData) {
        let products = this.findAll();
        // con el findIdex buscamos en que indice esta guardado el producto deseado a modificasr
        const indice =  products.findIndex(product => product.id === id);

       // con esto, modificamos los datos que queremos cambiar, a traves de los que nos pasan por parametros
        products[indice].name = newData.name;   // modificar cuando ponga las categorias en el objeto literal
        products[indice].price = newData.price;
        products[indice].description = newData.description;
        products[indice].img = newData.img;  // modificar cuando ponga las categorias en el objeto literal

        const productsJson = JSON.stringify(products);

        fs.writeFileSync(path.join(__dirname,this.route), productsJson);
        
        return products;

    },

    // Agregar un nuevo producto
    createOne: function(newProduct) {
        let products = this.findAll();
       // le di ID al nuevo producto
        newProduct.id = products[products.length -1]. id + 1;
       // lo mandamos al array 
        products.push(newProduct);
      
        const productsJson = JSON.stringify(products);

        fs.writeFileSync(path.join(__dirname,this.route), productsJson);
    }

}

module.exports = model;