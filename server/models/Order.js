const { Schema, model } = require('mongoose');

const productSchema = require('./Product');

// Schema for Order model
const orderSchema = new Schema(
    {   
        // adds price, gets price as value with two decimals, sets price as cents
        price: {
            type: Number,
            required: true, 
            get: p => (p/100).toFixed(2),
            set: p => p*100
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
        products: [productSchema],
    },
    {
        toJSON: { getters: true }
    }
)




const Order = model('order', orderSchema);
  
module.exports = Order;