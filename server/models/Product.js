const { Schema, model } = require('mongoose');

// schema for Product model
const productModel = new Schema(
    {
        // adds price, gets price as value with two decimals, sets price as cents
        price: {
            type: Number,
            required: true, 
            get: p => (p/100).toFixed(2),
            set: p => p*100
        },
        quantity: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        categoryId: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        },  
    },
    {
        toJSON: { getters: true }
    }
         
);


const Product = model('Product', orderSchema);

module.exports = Product;