module.exports = (sequelize, DataType) =>{
    const alias = "Categorie_Product";

    const cols= {
        category_name:{
            //no entendi si es esto
            type:DataType.VARCHAR,
            reference:{
                model:"categories",
                key:""
            }
        },
        product_code:{
            type:DataType.VARCHAR,
            reference:{
                model:"products",
                key:"product_code",
            }
        }
    }
    const config = {
        tableName: "categories_products",
        timeStamps: false
    };

    const categorie_product= sequelize.define(alias, cols, config);

    return categorie_product;
}