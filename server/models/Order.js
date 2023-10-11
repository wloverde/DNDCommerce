const { Schema, model } = require('mongoose');

// Schema for Order model
const orderSchema = new Schema(
    {
         
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }
        ]
    },
    {
        toJSON: { getters: true }
    }
)




const Order = model('Order', orderSchema);

module.exports = Order;