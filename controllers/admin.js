const Product = require('../models/product'); 
exports.getAddProduct = (req,res,next) => {
    res.render('admin/add-product', {docTitle: 'Add Product', path: '/admin/add-product'});
}

exports.postAddProduct = (req,res,next) => {
    const prod = new Product(req.body.title); 
    prod.save();
    res.redirect('/');
}

exports.getProducts = async (req,res, next) => {
    const products = await Product.fetchAll();
    res.render('admin/products', {docTitle: 'Admin Products', prods:products, path: 'admin/products'});
}
