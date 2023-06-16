const express = require('express');
const routes = express.Router();

const Detail = require('../models/Detail');

routes.get('/', async (req, res) => {
    const details = await Detail.findOne({ _id: "648c2f8e76b7599ef40789e2"});
    console.log(details);
    res.render("index", {
        details:details
    });
});

routes.get('/gallary', (req, res) => {
    res.render("gallary");
});

module.exports = routes;