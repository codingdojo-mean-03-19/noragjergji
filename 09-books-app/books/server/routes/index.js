const router = require('express').Router();
const bookRouter = require('./book.route');

// makes all the routes /books
module.exports = router.use('/books', bookRouter);