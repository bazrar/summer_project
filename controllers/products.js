const Product = require('../models/product');

exports.getAddProduct = (req,res,next) => {
    res.render('add-product', {docTitle: 'add-product', path: '/admin/add-product'});
}

exports.postAddProduct = (req,res,next) => {
    const prod = new Product(req.body.title);
    prod.save();
    res.redirect('/');
}


exports.getProducts = async (req,res,next) => {
    const products = await Product.fetchAll();
   res.render('shop', {docTitle: 'Shop', prods:products, path: '/'});
}