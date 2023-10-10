const db = require('../config/connection');
const { User, Order, Product } = require('../models');
const UserSeeds = require('./userSeeds.json');
const ProductSeeds = require('./productSeeds.json');
 
const OrderSeeds = require('./orderSeeds.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Order.deleteMany({});
        await Product.deleteMany({}); 
    
        // await User.create(UserSeeds); 
        // await Product.create(ProductSeeds);
        // await Order.create(OrderSeeds); 
    
        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
    });