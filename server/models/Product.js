const { Schema, model } = require('mongoose');

// schema for Product model
const productSchema = new Schema(
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
        imgLink: {
            type: String
        },
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String
        },  
    },
    {
        toJSON: { getters: true }
    }
         
);


const Product = model('product', productSchema);

module.exports = Product;