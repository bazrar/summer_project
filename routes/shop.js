const router = require('express').Router(); 
const path = require('path'); 
const rootDir = require('../utils/path');
const adminData = require('./admin'); 
router.get('/', (req,res,next) => {
   const {products} = adminData;
   res.render('shop', {docTitle: 'Shop', prods: products, path: '/'});
}); 

module.exports = router;