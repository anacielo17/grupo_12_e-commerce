module.exports = (sequelize, DataType) => {
   const alias = "Brand";
   const cols = {
    brand_code:{
        type: DataType.STRING,
        primaryKey: true,
        allowNull: false,
    },
    brand_name:{
        type: DataType.STRING,
        allowNull:false
    },
    brand_country:{
        type: DataType.STRING,
        allowNull:false,
    },
   }
   const config = {
    tableName: "brands",
    timestamps: false
};

const Brand = sequelize.define(alias, cols, config);

       Brand.associate = models =>{
       Brand.hasMany(models.Product, {
        as : "brand", 
        timestamps:false, 
        foreignKey: "brand_code"
       }); 
    } 
return Brand;
}