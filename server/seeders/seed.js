const db = require('../config/connection');
const { User, Order, Product, Category } = require('../models');
const UserSeeds = require('./userSeeds.json');
const ProductSeeds = require('./productSeeds.json');
const CategorySeeds = require('./categorySeeds.json');
const OrderSeeds = require('./orderSeeds.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Order.deleteMany({});
        await Product.deleteMany({});
        await Category.deleteMany({});
    
        await User.create(UserSeeds);
        await Category.create(CategorySeeds);
        await Product.create(ProductSeeds);
        await Order.create(OrderSeeds);
    
        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
    });