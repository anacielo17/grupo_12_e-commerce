module.exports = (sequelize, DataType) => {
    const alias= "Order_detail";

    const cols={
        order_code:{
           type:DataType.INTEGER,
           allowNull:false,
           reference:{
            model:"orders",
            key:"order_code",
           }
        },
        product_code:{
            type:DataType.VARCHAR,
           allowNull:false,
           reference:{
            model:"products",
            key:"product_code"
        }
    },
    united_price:{
        type:DataType.DECIMAL,
        allowNull:false,
    },
    total_price:{
        type:DataType.DECIMAL,
        allowNull:false,
    },
    discount:{
        type:DataType.DECIMAL,
        allowNull:false,
    }
};
const config = {
    tableName: "order_detail_detail",
    timeStamps: false
};

const Order_detail = sequelize.define(alias, cols, config);

return Order_detail;
}