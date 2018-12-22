const express = require('express');
const app = express();

const prouductRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');


app.use('/products', prouductRoutes);

app.use('/orders', orderRoutes);

module.exports = app;