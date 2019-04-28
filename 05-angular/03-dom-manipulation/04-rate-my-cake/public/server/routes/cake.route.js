const {cakeController} = require('../controllers')
const router = require('express').Router();

module.exports = router
    .get('/', cakeController.index)
    .post('/', cakeController.create)
    .get('/:cake_id', cakeController.show);