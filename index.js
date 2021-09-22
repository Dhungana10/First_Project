const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Product = require('./models/product');
const seedDB = require('./seed');


mongoose.connect('mongodb://localhost:27017/shop-db')
.then(()=> console.log('DB Connected'))
.catch((err) => console.log(err));


app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.send("Connected!!");
});


//Get all the products from the database
app.get('/products', async (req, res)=>{
    const products = await Product.find();
    res.render('index', {products});
});


app.listen(2324,()=>{
    console.log('Server started at port 2324!!!');
});
                                                                            