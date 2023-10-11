const mongoose = require('mongoose');

const { Schema } = mongoose;

//Schema for Category model
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
