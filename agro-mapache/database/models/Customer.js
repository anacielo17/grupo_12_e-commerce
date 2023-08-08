const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const { DataTypes } = require("sequelize")
module.exports = (sequelize, DataType) => {
    const alias = "Customer";

    const cols = {
        customer_id:{
            type:DataType.STRING,
            primaryKey: true,
            defaultValue: () => uuidv4(),
            allowNull: false 
            
            
        },
        customer_name:{
            type:DataType.STRING,
            allowNull:false,
        },
        customer_lastName:{
            type:DataType.STRING,
            allowNull: false,
        },
        customer_birthdate:{
            type: DataType.DATE,
            allowNull: false
        },
        customer_country: {
            type:DataType.STRING,
            allowNull:false,
        },
        customer_phone:{
            type:DataType.BIGINT
        },
        customer_email:{
            type:DataType.STRING,
            allowNull:false,
        },
        customer_gender:{
            type:DataType.STRING,
        },
        customer_type: {
            type:DataType.STRING,
            allowNull:false,
        }, 
         image : {
            type: DataType.STRING,
            /* allowNull: false */
        }, 
        password : {
            type: DataType.STRING,
            allowNull: false
        }, 
        /* confirmPassword: {
            type: DataType.STRING,
           allowNull: false   
        },  */

    };
    const config = {
        tableName :"customers",
        timestamps :false
    }
    
    const Customer = sequelize.define(alias, cols, config);
    
    return Customer;
}