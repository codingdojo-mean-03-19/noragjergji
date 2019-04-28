const router = require('express').Router();
const cakeRouter = require('./cake.route');

module.exports = router.use('/cakes', cakeRouter);