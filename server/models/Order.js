const { Schema, model } = require('mongoose');

// Schema for Order model
const orderSchema = new Schema(
    {
        purchaseDate: {
            type: Date,
            default: Date.now
          },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }
        ]
    } 
)




const Order = model('Order', orderSchema);

module.exports = Order;