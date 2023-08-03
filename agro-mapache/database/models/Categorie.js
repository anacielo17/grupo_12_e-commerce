module.exports = (sequelize, DataType) => {
    const alias = "Categorie";

    const cols= {
        category_id:{
            type:DataType.VARCHAR,
            allowNull:false,
            primaryKey:true,
        },
        category_name:{
            type:DataType.VARCHAR,
            allowNull:false,
        },
        category_code:{
            type:DataType.INTEGER,
        }
    }
    const config = {
        tableName: "categories",
        timeStamps: false
    };

    const Categorie= sequelize.define(alias, cols, config);

    return Categorie;
}