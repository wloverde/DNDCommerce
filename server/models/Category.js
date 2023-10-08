const { Schema, model } = require('mongoose');

const categorymodel = new Schema(
    {
        name: {
            type: String,
            required: true
        }
    }
)

const Category = model('category', categorySchema);

module.exports = Category;