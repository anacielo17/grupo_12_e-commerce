module.exports = (sequelize, DataType) => {
    const alias = "Product";
    const cols = {
        product_code: {
            type: DataType.VARCHAR,
            primaryKey: true

        },
        product_id: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        product_date: {
            type: DataType.DATE
        },
        product_inStock: {
            type: DataType.INTEGER
        },
        brand_code: {
            type: DataType.VARCHAR

        },
        origin: {
            type: DataType.VARCHAR
        },
        product_price: {
            type: DataType.VARCHAR
        },
        name: {
            type: DataType.VARCHAR
        }
    };

    const config = {
        tableName: "products",
        timeStamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    return Product;
}