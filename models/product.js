const fs = require('fs'); 
const path = require('path'); 
const rootdir = require('../utils/path'); 

const p = path.join(rootdir, 'data', 'products.json'); 
const getProductsFromFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(p, (err, data) => {
            if(!err) {
                resolve(JSON.parse(data))
            }
            reject(err);
        });
    }); 
}

class Product { 
    constructor(title) {
        this.title = title; 
    }

    save = async () => {
        let products = await getProductsFromFile(); 
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => console.log(err));
    }
   static fetchAll() {
       return getProductsFromFile();
   }
}

module.exports = Product;