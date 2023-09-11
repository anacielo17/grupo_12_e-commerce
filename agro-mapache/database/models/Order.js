module.exports = (sequelize, DataType) => {
    const alias = "Order";

    const cols = {
        order_id: {
            type:DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false    
        },
        
        customer_id:{
            type:DataType.STRING,
            allowNull:false,
            reference:{
                model:"customers",
                key:"customer_id"
            },
       
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
           
        },
        quantity :{
            type :DataType.INTEGER,
           
        },
        subtotal: {
            type: DataType.DECIMAL
        }, 
        
        discount: {
            type: DataType.DECIMAL
        },
        total_price: {
            type: DataType.DECIMAL,
            
        },
        ship_adress:{
            type: DataType.STRING
        },
        paymentMethod:{
            type: DataType.STRING
        }
        
    };
    const config = {
        tableName: "orders",
        timestamps: false
    };

    const Order = sequelize.define(alias, cols, config);
    Order.associate = (models) => {
        Order.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'product_id'
        });
            Order.belongsTo(models.Customer, {
            as: 'customer',
            foreignKey: 'customer_id'
        })
    };

    return Order;
}