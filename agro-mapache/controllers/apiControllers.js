
const db = require("../database/models")
const { Op } = require('sequelize');
/* require('dotenv').config();
const envs = process.env; */

module.exports = {
    productAll: async (req, res) => {
        const products = await db.Product.findAll({
            include: [{ association: 'category', attributes: ["category_id", "category_name"] }, { association: 'brand', attributes: ["brand_code", "brand_name"] }],
            attributes: ['product_id', 'name', 'description','image'],
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
        const ecommerce = "http://localhost:3001/"
        const productCollection = products.map(product => ({
            id: product.product_id,
            name: product.name,
            description: product.description,
            detail: `/api/product/${product.product_id}`,
            imageUrl:  `${ecommerce}img/products/${product.image}`
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
            attributes: ['product_id', 'name',"product_price",/* "quantity" */ 'description', 'image'],
            raw: true
        })

        if (product) {
            const ecommerce = "http://localhost:3001/"
            if (product) {
                product.imageUrl=  `${ecommerce}img/products/${product.image}`
                res.json(product);
            } else {
                return res.status(404).json({ error: `El producto no existe` });
            }
        }
    },





    // User------------------------------------------------


    usersAll: async (req, res) => {
        const users = await db.Customer.findAll({
            attributes: ['customer_id', 'customer_name', 'customer_email', 'image'],
            raw: true,

        })
        const ecommerce = "http://localhost:3001/"
        const userCollection = users.map(customer => ({
            id: customer.customer_id,
            name: customer.customer_name,
            customer_email: customer.customer_email,
            detail: `/api/user/${customer.customer_id}`,
            image: `${ecommerce}img/user/${customer.image}`
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
        const ecommerce = "http://localhost:3001/"
        if (customer) {
        
            res.json({customer, 
                    image : `${ecommerce}img/user/${customer.image}`});
        } else {
            return res.status(404).json({ error: `El cliente no existe` });
        }
    },
    categories: async (req, res) => {
        const categories = await db.Category.findAll({
            attributes: ['category_id','category_name'],
            raw: true,

        })
        
        const categoryCollection = categories.map(category => ({
            name: category.category_name,
            id: category.category_id
            
        }))

        console.log(categories, categoryCollection)
        res.json({
            categories: categoryCollection,
            total: categoryCollection.length,
        })
    },

    }
    
    
    
    

