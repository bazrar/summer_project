const Product = require('../models/product'); 
exports.getAddProduct = (req,res,next) => {
    res.render('admin/add-product', {docTitle: 'Add Product', path: '/admin/add-product'});
}

exports.postAddProduct = (req,res,next) => {
    const {title, imageUrl, description, price} = req.body; 
    const prod = new Product(title, imageUrl, description, price); 
    prod.save();
    res.redirect('/');
}

exports.getProducts = async (req,res, next) => {
    const products = await Product.fetchAll();
    res.render('admin/products', {docTitle: 'Admin Products', prods:products, path: 'admin/products'});
}
