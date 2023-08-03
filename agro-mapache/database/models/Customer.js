module.exports = (sequelize, DataType) => {
    const alias = "Customer";

    const cols = {
        customer_id:{
            type:DataType.VARCHAR,
            allowNull: false,
            unique:true,
        },
        customer_name:{
            type:DataType.VARCHAR,
            allowNull:false,
        },
        customer_lastName:{
            type:DataType.VARCHAR,
            allowNull: false,
        },
        customer_birthdate:{
            type: DataType.DATE,
        },
        customer_country: {
            type:DataType.VARCHAR,
            allowNull:false,
        },
        customer_phone:{
            type:DataType.INTEGER,
            allowNull:false,
        },
        customer_email:{
            type:DataType.VARCHAR,
            allowNull:false,
        },
        customer_gender:{
            type:DataType.VARCHAR,
        },
        customer_type: {
            type:DataType.VARCHAR,
            allowNull:false,
        }

    };
    const config = {
        tableName :"customers",
        timeStamps :false
    }
    
    const Customer = sequelize.define(alias, cols, config);
    
    return Customer;
}