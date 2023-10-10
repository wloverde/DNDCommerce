const { Schema, model } = require('mongoose');

// Schema for Order model
const orderSchema = new Schema(
    {
        // adds total, gets total as value with two decimals, sets total as cents
        total: {
            type: Number,
            required: true,
            get: p => (p / 100).toFixed(2),
            set: p => p * 100
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
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




const Order = model('order', orderSchema);

module.exports = Order;