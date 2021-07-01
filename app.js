const express = require('express');
const path = require('path'); 
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error')
const rootDir = require('./utils/path'); 

const app = express();
app.set('view engine', 'ejs'); 
app.set('views', 'views'); 

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


app.listen(3000, () => console.log('server started at port 3000'))