
const db = require("../database/models")
const { Op } = require('sequelize');
/* require('dotenv').config();
const envs = process.env; */

module.exports = {
    productAll: async (req, res) => {
        const products = await db.Product.findAll({
            include: [{ association: 'category', attributes: ["category_id", "category_name"] }, { association: 'brand', attributes: ["brand_code", "brand_name"] }],
            attributes: ['product_id', 'name', 'description'],
            raw: true,



        });
        //Se inicia un objeto vacío para almacenar la información sobre el recuento de productos por categoría
        //forEach itera a través de cada producto en el arreglo products. Para cada producto se obtiene el ID 
        //Se verifica si ya existe una entrada en el objeto productsByCategory para la categoría actual (categoryId). 
        //Si no existe, se crea una entrada con el nombre de la categoría y se inicializa el contador totalProducts en 0
        const productsByCategory = {};
        products.forEach(product => {
            const categoryId = product['category.category_id'];
            if (!productsByCategory[categoryId]) {
                productsByCategory[categoryId] = {
                    category: product['category.category_name'],
                    totalProducts: 0,
                };
            }
            productsByCategory[categoryId].totalProducts++;
        });
        const productsByBrand = {};
        products.forEach(product => {
            const brandId = product['brand.brand_code'];
            if (!productsByBrand[brandId]) {
                productsByBrand[brandId] = {
                    brand: product['brand.brand_name'],
                    totalProducts: 0,
                };
            }
            productsByBrand[brandId].totalProducts++;
        });
        const productCollection = products.map(product => ({
            id: product.product_id,
            name: product.name,
            description: product.description,
            detail: `/api/product/${product.product_id}`,
        }))

        res.json({
            products: productCollection,
            total: productCollection.length,
            productsByCategory,
            productsByBrand,


        })
        console.log(products, productsByCategory, productsByBrand, productCollection)
    },
    productDetail: async (req, res) => {
        const product = await db.Product.findByPk(req.params.product_id, {
            include: [{ association: 'category', attributes: ["category_name"] }, { association: 'brand', attributes: ["brand_name"] }],
            attributes: ['product_id', 'name', 'description'],
            raw: true
        })

        if (product) {
            console.log(product);

            const productImageURL = `/api/user/${product.product_id}/image`;

            product.productImage = productImageURL; // Cambio 'user' a 'customer'

            res.json(product);
        } else {
            return res.status(404).json({ error: `El producto no existe` });
        }
    },
    productImage: async (req, res) => {
        const product = await db.Product.findByPk(req.params.product_id, {
            attributes: ["image"],
            raw: true
        })
        res.json(product)
    },




    // User------------------------------------------------


    usersAll: async (req, res) => {
        const users = await db.Customer.findAll({
            attributes: ['customer_id', 'customer_name', 'customer_email'],
            raw: true,

        })
        const userCollection = users.map(customer => ({
            id: customer.customer_id,
            name: customer.customer_name,
            customer_email: customer.customer_email,
            detail: `/api/user/${customer.customer_id}`,
        }))

        console.log(users, userCollection)
        res.json({
            users: userCollection,
            total: userCollection.length,
        })
    },
    userDetail: async (req, res) => {
        const customer = await db.Customer.findByPk(req.params.customer_id, {
            attributes: ['customer_id', 'customer_name', 'customer_lastName', "customer_phone", "customer_email", "customer_gender", "image", "customer_birthdate", "customer_country"],
            raw: true
        })

        if (customer) {
            console.log(customer);

            const profileImageURL = `/api/user/${customer.customer_id}/image`;

            customer.profileImage = profileImageURL; // Cambio 'user' a 'customer'

            res.json(customer);
        } else {
            return res.status(404).json({ error: `El cliente no existe` });
        }
    },

    userImage: async (req, res) => {
        const customer = await db.Customer.findByPk(req.params.customer_id, {
            attributes: ["image"],
            raw: true
        })
        res.json(customer)
    },
}

// No salio :( 
/* usersList: async (req, res) => {
    const users = await db.Customer.findAll({
        attributes: ['customer_id', 'customer_name', 'customer_email'],
        raw: true,
    });

    const addDetailRouteToObjects = (objList, route, field) => {
        const url = envs.APP_URL + ':' + envs.APP_PORT;
        return objList.map(item => {
            item.detail = url + route + item[field];
            return item;
        });
    };

    const usersWithDetail = addDetailRouteToObjects(users, '/user/', 'customer_id');

    console.log(usersWithDetail);
    res.json({
        users: usersWithDetail,
        total: users.length, // Cambio aquí
    });
},

userDetail: async (req, res) => {
    const findUser = req.params.customer_name;
    let customer = await db.Customer.findOne({
        where: { customer_name: findUser },
    });

    if (customer) {
        const urlBase = envs.APP_URL + ':' + envs.APP_PORT;
        customer.dataValues.imageURL =
            urlBase + '/images/userProfile/' + customer.image; // Cambio aquí
        delete customer.dataValues.customer_id; // Cambio aquí
        delete customer.dataValues.password;
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.json(customer);
    } else {
        return res
            .status(404)
            .json({ user: `El usuario ${findUser} no existe` });
    }
}        
 */

/* const addObjOfImage = (productDetail)=>{
 let product = productDetail;
 let arrayOfImages = JSON.parse(product.dataValues.image);
 let objImage= {};
 const url= envs.APP_URL+':'+ envs.APP_PORT;
 arrayOfImages.forEach((image,i) =>{
     objImage[i+1]= url +'/images/productos/'+image;
 })
 delete(product.dataValues.image)
 delete(product.dataValues.category_id)
 delete(product.dataValues.brand_code)
 product.dataValues.image= objImage;
 return product;
}
const addDetailRouteToObjects = (objList, route, field) => {
 const url = envs.APP_URL + ':' + envs.APP_PORT;
 return (objList.map( (item) => {
         item.dataValues.detail = url + route + item[field];
         return item
     })
 );
} */
/*
    */

