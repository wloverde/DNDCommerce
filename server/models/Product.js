const { Schema, model } = require('mongoose');

// schema for Product model
const productSchema = new Schema(
    {
       
        price: {
            type: Number,
            required: true,
            min: 0.00  
        },
        quantity: {
            type: Number,
            required: true,
            min: 0,
            default: 0
        },
        image: {
            type: String
        },
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String
        },  
        description: {
            type: String
        }
    },
    {
        toJSON: { getters: true }
    }
         
);


const Product = model('Product', productSchema);

module.exports = Product;