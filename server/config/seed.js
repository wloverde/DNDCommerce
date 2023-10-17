const db = require('./connection');
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
                "category": categories[0]._id,
                "image" : "https://cdn.midjourney.com/2f42f6bc-07e8-4339-a0d4-13467c0079ce/0_3.png"
            },
            {
                "name": "Bow",
                "price": 100,
                "description": "long-distance weapon to shoot dem enemies from range",
                "quantity": 10,
                "category": categories[1]._id,
                "image" : "https://cdn.midjourney.com/cf01dff7-e146-4216-93b1-5200fa6fb216/0_1.png"
            },
            {
                "name": "The Shady Tutor",
                "price": 100,
                "description": `So basically... +10 Intellect, -5 Charisma`,
                "quantity": 10,
                "category": categories[2]._id,
                "image" : "https://cdn.midjourney.com/6214e55a-c662-4cd6-99ce-b1903d641575/0_2.png"
            },
            {
                "name": "The Pirate King",
                "price": 100,
                "description": "The treasure is the friends we made along the way.",
                "quantity": 10,
                "category": categories[3]._id,
                "image" : "https://cdn.midjourney.com/769f6514-31df-48bc-a109-16d7cbd90525/0_1.png"
            },
            {
                "name": "Shield",
                "price": 75,
                "description": "Blocks some damage",
                "quantity": 5,
                "category": categories[0]._id,
                "image" : 'https://cdn.midjourney.com/afc79e29-7f66-4ef5-b80d-dd545dedd192/0_3.png'
            },
            {
                "name": "YOMAMA Staff",
                "price": 300,
                "description": "Uses power of the YOMAMA",
                "quantity": 2,
                "category": categories[2]._id,
                "image" : "https://cdn.midjourney.com/1895a80e-04b4-4fb7-8a16-8567299c167d/0_2.png"
            },            
            {
                "name": "Staff of Ruin",
                "price": 300,
                "description": "We herd u h8 Harry Pottah",
                "quantity": 2,
                "category": categories[2]._id,
                "image" : "https://cdn.midjourney.com/7f815f6b-adb4-4de4-9271-0404abee7282/0_0.png"
            },
            {
                "name": "2 Handed Sword",
                "price": 275,
                "description": "one sword for each hand",
                "quantity": 3,
                "category": categories[0]._id,
                "image" : "https://cdn.midjourney.com/ba24c979-3540-4bec-bc99-f291b8fecd84/0_1.png"
            },
            {
                "name": "Magic Robes",
                "price": 200,
                "description": "Blocks some magic",
                "quantity": 5,
                "category": categories[3]._id,
                "image" : "https://cdn.midjourney.com/3cb14b6d-7f25-4645-9f87-05eb5c768adf/0_1.png"
            },
            {
                "name": "Magic Wand",
                "price": 75,
                "description": "We heard you like Harry Potter",
                "quantity": 10,
                "category": categories[2]._id,
                "image" : "https://cdn.midjourney.com/f45f5a3b-0bae-4c5c-ab1a-b943a2431859/0_1.png"
            },
            {
                "name": "Quiver",
                "price": 75,
                "description": "Shoot someone in the ass and they fall in love??? Ask Cupid lol",
                "quantity": 15,
                "category": categories[4]._id,
                "image" : " https://cdn.midjourney.com/289fcccc-15c7-44b4-8ae9-986c2c30bc06/0_3.png"
            },
            {
                "name": "Shiesty",
                "price": 999,
                "description": "We be robbin errday SKI SKI",
                "quantity": 1,
                "category": categories[3]._id,
                "image" : "https://cdn.midjourney.com/bec098e5-edc9-452d-b32b-459e38d2e3d1/0_1.png"
            },
            {
                "name": "Glock-9",
                "price": 1999,
                "description": "Gun for your daily needs",
                "quantity": 1,
                "category": categories[1]._id,
                "image": "https://cdn.midjourney.com/b7b98461-2d77-41aa-b25d-c61c059c136a/0_2.png"
            },
            {
                "name": "Black Forces",
                "price": 999,
                "description": "2Mean4U - +10 Intimidation",
                "quantity": 1,
                "category": categories[3]._id,
                "image": " https://cdn.midjourney.com/6b5b85ee-7b55-4b41-9143-3010d7a83960/0_3.png"
            },
            {
                "name": "Hennessy",
                "price": 1399,
                "description": "Drink for the real homies",
                "quantity": 5,
                "category": categories[4]._id,
                "image": " https://cdn.midjourney.com/844e5241-5a44-410b-af07-120318ae2340/0_0.png"
            },
            {
                "name": "Health Potion",
                "price": 50,
                "description": "Refills your health!",
                "quantity": 100,
                "category": categories[4]._id,
                "image" : "https://cdn.midjourney.com/c338b6dd-ef71-4d61-ad8f-bb6d0a1f96ad/0_1.png"
            },
            {
                "name": "Mana Potion",
                "price": 65,
                "description": "Refills your mana!",
                "quantity": 100,
                "category": categories[4]._id,
                "image" : "https://cdn.midjourney.com/637b838b-cabb-4dbe-894e-f6c85b31c538/0_3.png"
            },
            {
                "name": "Black & Mild",
                "price": 1,
                "description": "Good ass cigars for a good time",
                "quantity": 1000,
                "category": categories[4]._id,
                "image": "https://cdn.midjourney.com/e2073645-aacb-4414-bff0-099aa4837065/0_1.png"
            },
            {
                "name": "Light Armor",
                "price": 99,
                "description": "typical light armor",
                "quantity": 10,
                "category": categories[3]._id,
                "image" : " https://cdn.midjourney.com/fa8af0d3-9ae7-4091-a771-37600ef7e2ae/0_2.png"
            },
            {
                "name": "Medium Armor",
                "price": 105,
                "description": "typical medium armor",
                "quantity": 10,
                "category": categories[3]._id,
                "image" : " https://cdn.midjourney.com/fa1011eb-befb-4c45-9473-d6e9f4d1a4a7/0_3.png"
            }
        ]
    );
    console.log('products seeded');
    
    // seeding Order
    await Order.deleteMany();

    const orders = await Order.insertMany([{
        "products":  [products[0]._id, products[0]._id, products[1]._id]
    }]) 

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