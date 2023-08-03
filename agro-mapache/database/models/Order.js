module.exports = (sequelize, DataType) => {
    const alias = "Order";

    const cols ={
        order_code:{
            type:DataType.INTEGER,
            allowNull: false,
        },
        customer_id:{
            type:DataType.VARCHAR,
            allowNull:false,
            reference:{
                model:"customers",
                key:"customer_id"
            }
        },
        order_date:{
            type:DataType.DATE,
        },
        ship_date:{
            type:DataType.DATE,
        },
        ship_adress:{
            type:DataType.VARCHAR,
            allowNull:false,
        },
        ship_city:{
            type:DataType.VARCHAR,
            allowNull:false
        },
        ship_PC:{
            type:DataType.VARCHAR,
            allowNull:false,
        },
        ship_province:{
            type:DataType.VARCHAR,
            allowNull:false
        },
        name_addresse:{
            type:DataType.VARCHAR,
            allowNull:false,
        },
        DNI_addresse:{
            type:DataType.INTEGER,
            allowNull:false,
        }
        };
        const config = {
            tableName: "orders",
            timeStamps: false
        };
    
        const Order = sequelize.define(alias, cols, config);
    
        return Order;

    }
