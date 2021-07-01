const express = require('express');
const path = require('path'); 
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./utils/path'); 

const app = express();
app.set('view engine', 'pug'); 
app.set('views', 'views'); 

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminData.router);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).render('404.pug', {docTitle: 'Page not found'});
})


app.listen(3000, () => console.log('server started at port 3000'))