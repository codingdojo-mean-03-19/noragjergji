const router = require('express').Router();
const { playerController } = require('../controllers');

module.exports = router     
        .get('/', playerController.index)
        .post('/', playerController.create)
        .put('/:player_id', playerController.update)
        .delete('/:player_id', playerController.destroy);