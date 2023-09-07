module.exports = (sequelize, DataType) => {
    const alias = "Order_detail";

    const cols = {
        order_code: {
            type: DataType.BIGINT,
            allowNull: false,
            reference: {
                model: "orders",
                key: "order_code",
            }
        },
        product_id: {
            type: DataType.INTEGER,
            allowNull: false,
            reference: {
                model: "products",
                key: "product_id"
            }
        },
        unit_price: {
            type: DataType.DECIMAL,
            allowNull: false,
        },
        total_price: {
            type: DataType.DECIMAL,
            allowNull: false,
        },
        discount: {
            type: DataType.DECIMAL
        },
        quantity :{
            type :DataType.INTEGER,
            allowNull: false
        } 
    };
    const config = {
        tableName: "order_details",
        timestamps: false
    };

    const Order_detail = sequelize.define(alias, cols, config);
    Order_detail.associate = (models) => {
        Order_detail.belongsTo(models.Order, {
          as: "order",
          timestamps:false, 
          foreignKey: "order_code"
        });
    
      };

    return Order_detail;
}