const products = [];
exports.getAddProduct = (req,res,next) => {
    res.render('add-product', {docTitle: 'add-product', path: '/admin/add-product'});
}

exports.postAddProduct = (req,res,next) => {
    // console.log(req.body);
    products.push({title: req.body.title})
    res.redirect('/');
}


exports.getProducts = (req,res,next) => {
    res.render('shop', {docTitle: 'Shop', prods: products, path: '/'});
}