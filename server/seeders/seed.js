const db = require('../config/connection');
const { User, Order, Product, Category } = require('../models');

db.once('open', async () => {
    // seeding Categories:
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Melee' },
        { name: 'Ranged' },
        { name: 'Magic' },
        { name: 'Armor' },
        { name: 'Consumable' }
    ]);

    console.log('categories seeded');

    // seeding Products:
    await Product.deleteMany({});

    const products = await Product.insertMany(
        [
            {
                "name": "Sword",
                "price": 150,
                "description": "a sharp, bladed weapon made of metal, commonly steel, with a short hilt",
                "quantity": 10,
                "category": categories[0]._id
            },
            {
                "name": "Bow",
                "price": 100,
                "description": "long-distance weapon to shoot dem enemies from range",
                "quantity": 10,
                "category": categories[1]._id
            },
            {
                "name": "Shield",
                "price": 75,
                "description": "Blocks some damage",
                "quantity": 5,
                "category": categories[0]._id
            },
            {
                "name": "Staff",
                "price": 300,
                "description": "Allows user to use magic",
                "quantity": 2,
                "category": categories[2]._id
            },
            {
                "name": "2 Handed Sword",
                "price": 275,
                "description": "one sword for each hand",
                "quantity": 3,
                "category": categories[0]._id
            },
            {
                "name": "Magic Robes",
                "price": 200,
                "description": "Blocks some magic",
                "quantity": 5,
                "category": categories[3]._id
            },
            {
                "name": "Magic Wand",
                "price": 75,
                "description": "We heard you like Harry Potter",
                "quantity": 10,
                "category": categories[2]._id
            },
            {
                "name": "Quiver",
                "price": 75,
                "description": "Shoot someone in the ass and they fall in love??? Ask Cupid lol",
                "quantity": 15,
                "category": categories[4]._id
            },
            {
                "name": "Shiesty",
                "price": 999,
                "description": "WE DA BEST",
                "quantity": 1,
                "category": categories[3]._id
            },
            {
                "name": "Glock-9",
                "price": 1999,
                "description": "Gun for your daily needs",
                "quantity": 1,
                "category": categories[1]._id
            },
            {
                "name": "Black Forces",
                "price": 999,
                "description": "2Mean4U",
                "quantity": 1,
                "category": categories[3]._id
            },
            {
                "name": "Hennessy",
                "price": 1399,
                "description": "Drink for the real homies",
                "quantity": 5,
                "category": categories[4]._id
            },
            {
                "name": "Health Potion",
                "price": 50,
                "description": "Refills your health!",
                "quantity": 100,
                "category": categories[4]._id
            },
            {
                "name": "Mana Potion",
                "price": 65,
                "description": "Refills your mana!",
                "quantity": 100,
                "category": categories[4]._id
            },
            {
                "name": "Black & Mild",
                "price": 1,
                "description": "Good ass cigars",
                "quantity": 1000,
                "category": categories[4]._id
            },
            {
                "name": "Light Armor",
                "price": 99,
                "description": "typical light armor",
                "quantity": 10,
                "category": categories[3]._id
            },
            {
                "name": "Medium Armor",
                "price": 105,
                "description": "typical medium armor",
                "quantity": 10,
                "category": categories[3]._id
            }
        ]
    );
    console.log('products seeded');
    
    // seeding Order
    await Order.deleteMany();

    const orders = await Order.insertMany([{
        "products":  [products[0]._id, products[0]._id, products[1]._id]
    }]);

    // seeding User
    await User.deleteMany();

    await User.create({
        username: 'AidanDaHustla', 
        email: 'AidanDaHustla@testmail.com',
        password: 'password12345',
        orders: orders[0]._id
    });

    await User.create({
        username: 'Andrew',
        email: 'alove@testmail.com',
        password: 'password12345'
    });


    console.log('users seeded');
    process.exit();
});