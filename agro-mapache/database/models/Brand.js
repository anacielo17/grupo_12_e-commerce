module.exports = (sequelize, DataType) => {
   const alias = "Brand";
   const cols = {
    band_code:{
        type:DataType.VARCHAR,
        allowNull: false,
    },
    brand_name:{
        type:DataType.VARCHAR,
        allowNull:false
    },
    brand_country:{
        type:DataType.VARCHAR,
        allowNull:false,
    },
   }
   const config = {
    tableName: "brands",
    timeStamps: false
};

const Brand = sequelize.define(alias, cols, config);

return Brand;
}