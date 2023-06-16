const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/main');
const hbs = require('hbs');

app.use('', routes);
app.use('/static',express.static('public'));

app.set('view engine', 'hbs');
app.set("views","views")
hbs.registerPartials('views/partials');

//db connection
mongoose.connect('mongodb://localhost/website_tut', () => {
    console.log("db connected");
});

app.get('/', (req, res) => {
    res.send('Hello World!');
    
});

app.listen(3000, () => {
    console.log("server started");
});