const fs = require("fs");
const path = require("path");
const model = {
    // ruta del archivo JSON
    route: "../data/users.json",
    // traer los usuarios
    findAll: function () {
        const usersJson = fs.readFileSync(path.join(__dirname, this.route), "utf-8");

        const users = JSON.parse(usersJson);

        return users;

    }, 
    findById: function (id) {
        const users = this.findAll();

        let searched = users.find( user => user.id === id)

        if(!searched) {
            searched = null
        }

        return searched ;
    },
    //Eliminar un usuario
    deleteById: function (id) {
        let users = this.findAll();

        users = users.filter( user => user.id !== id);

        const usersJson = JSON.stringify(users);

        fs.writeFileSync(path.join(__dirname,this.route), usersJson);

        return users ;

    },
   
    // Editar un usuario
    updateById: function (id,newData) {
        let users = this.findAll();
        // con el findIdex buscamos en que indice esta guardado el usuario deseado a modificasr
        const indice =  users.findIndex(userActual => userActual.id === id);

       // con esto, modificamos los datos que queremos cambiar, a traves de los que nos pasan por parametros
        users[indice].firstName = newData.lastNameame;   
        users[indice].lastName = newData.lastName;
        users[indice].email = newData.email;
        users[indice].password = newData.password;
        users[indice].avatar = newData.password;


        const usersJson = JSON.stringify(users);

        fs.writeFileSync(path.join(__dirname,this.route), usersJson);
        
        return users;

    },

    // Agregar un nuevo usuario
    createOne: function(newUser) {
        let users = this.findAll();
       // le di ID al nuevo usuario
        newUser.id = users[users.length -1]. id + 1;
       // lo mandamos al array 
        users.push(newUser);
      
        const usersJson = JSON.stringify(users);

        fs.writeFileSync(path.join(__dirname,this.route), usersJson);
    }
}
    module.exports = model;