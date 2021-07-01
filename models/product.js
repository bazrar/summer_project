const fs = require('fs'); 
const path = require('path'); 
const rootdir = require('../utils/path'); 
const {promisify} = require('util');

const p = path.join(rootdir, 'data', 'products.json'); 

class Product { 
    constructor(title) {
        this.title = title; 
    }

    save() {
        fs.readFile(p, (err, data) => {
            let products = []; 
            if(!err) {
                products = JSON.parse(data); 
            }
            products.push(this); 
            fs.writeFile(p, JSON.stringify(products), err => console.log(err)); 

        });
    }

   static fetchAll = async () => {
       const products = await promisify(fs.readFile)(p, (err, data) => {
           let products = []; 
           products = !err ? JSON.parse(data) : []; 
           return products;
       });
       return products;
   }
}

module.exports = Product;