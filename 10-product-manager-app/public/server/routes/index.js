const router = require('express').Router();
const productRouter = require('./product.route');
const catchAllRouter = require('./catch-all.route')
const api = require('express').Router();

// makes all the routes /products
router.use('/products', productRouter);

module.exports = api.use('/api', router).use(catchAllRouter);