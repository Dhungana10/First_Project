const Product = require('./models/product');

const products = [
    {
        name: 'Iphone',
        price: 10000,
        desc: 'Good phone'
    },
    {
        name : 'Samsung',
        price: 8000,
        desc: 'Samsung is nice'
    },
    {
        name : 'Vivo',
        price: 8000,
        desc: 'Bad phone'
    },
    {
        name : 'Motorola',
        price: 8000,
        desc: 'Kam chaina'
    },
];

const seedDB = async() => {
    
    await Product.deleteMany({});

    await Product.insertMany(products);
    console.log('DB Seeded');
}


module.exports = seedDB;