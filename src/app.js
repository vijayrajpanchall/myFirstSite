const express = require('express');
const app = express();
const routes = require('./routes/main');
const hbs = require('hbs');

app.use('', routes);

app.set('view engine', 'hbs');
app.set("views","views")

app.get('/', (req, res) => {
    res.send('Hello World!');
    
});

app.listen(3000, () => {
    console.log("server started");
});