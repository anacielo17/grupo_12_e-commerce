module.exports = (sequelize, DataType) => {
    const alias = "Order";

    const cols ={
        order_code:{
            type:DataType.BIGINT,
            allowNull: false,
        },
        customer_id:{
            type:DataType.STRING,
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
            type:DataType.STRING,
            allowNull:false,
        },
        ship_city:{
            type:DataType.STRING,
            allowNull:false
        },
        ship_PC:{
            type:DataType.STRING,
            allowNull:false,
        },
        ship_province:{
            type:DataType.STRING,
            allowNull:false
        },
        name_addresse:{
            type:DataType.STRING,
            allowNull:false,
        },
        DNI_addresse:{
            type:DataType.BIGINT,
            allowNull:false,
        }
        };
        const config = {
            tableName: "orders",
            timestamps: false
        };
    
        const Order = sequelize.define(alias, cols, config);
    
        return Order;

    }
