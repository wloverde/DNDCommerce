const { Schema, model } = require('mongoose');

const productSchema = require('./Product');

const orderSchema = new Schema(
    {
        price: {
            type: Number,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
        products: [productSchema],
        

    }
)




const Order = model('Order', orderSchema);
  
module.exports = Order;