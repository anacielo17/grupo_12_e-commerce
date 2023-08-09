module.exports = (sequelize, DataType) => {
    const alias = "Category";

    const cols = {
        category_id: {
            type: DataType.INTEGER,
            allowNull: false,
            //autoIncrement: true,//
            primaryKey: true,
        },
        category_name: {
            type: DataType.STRING,
            allowNull: false,
        }
    }
    const config = {
        tableName: "categories",
        timestamps: false
    };

    const Category = sequelize.define(alias, cols, config);
     /*  Category.associate = models => {
        Category.hasMany(models.Product, {
            as: "category",
            timestamps: false,
            foreignKey: "category_id"
        });
    }   */
    return Category;
}