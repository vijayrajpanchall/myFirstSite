const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/main');
const hbs = require('hbs');
const Detail = require('./models/Detail');
app.use('', routes);
app.use('/static',express.static('public'));

app.set('view engine', 'hbs');
app.set("views","views")
hbs.registerPartials('views/partials');

//db connection
mongoose.connect('mongodb://localhost/website_tut', () => {
    console.log("db connected");
    // Detail.create({
    //     brandName: "Info Technical Solutions",
    //     brandIconUrl: "https://www.infotechnicalsolutions.com/wp-content/uploads/2019/01/Info-Technical-Solutions-Logo.png",
    //     links: [{
    //         label: "Home",
    //         url: "/"
    //     },
    //     {
    //         label: "Services",
    //         url: "/services"
    //     },
    //     {
    //         label: "About",
    //         url: "/about"
    //     },
    //     {
    //         label: "Contact",
    //         url: "/contact"
    //     }]
    // }, (err, detail) => {
    //     if(err) {
    //         console.log(err);
    //     } else {
    //         console.log(detail);
    //     }
    // }
    // );
});

app.get('/', (req, res) => {
    res.send('Hello World!');
    
});

app.listen(3000, () => {
    console.log("server started");
});