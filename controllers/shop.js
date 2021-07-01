const Product = require('../models/product');

exports.getProducts = async (req,res,next) => {
    const products = await Product.fetchAll();
    res.render('shop/product-list', {docTitle: 'Shop', prods:products, path: '/products'});
}

exports.getIndex = async (req,res, next) => {
    const products = await Product.fetchAll();
    res.render('shop/index', {docTitle: 'All Products', prods:products, path: '/'});
} 

exports.getCart = (req,res,next) => {
    res.render('shop/cart', {docTitle: 'Your Cart', path: '/cart'});
}

exports.getCheckout = (req,res,next) => {
    res.render('shop/checkout', {docTitle: 'Checkout', path: '/checkout'});
}