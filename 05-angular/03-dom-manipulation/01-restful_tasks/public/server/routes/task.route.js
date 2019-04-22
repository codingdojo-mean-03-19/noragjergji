const router = require('express').Router();
const {taskController} = require('../controller')

module.exports = function(app){
    app.get('/', taskController.index);
    app.post('/', taskController.create);
    app.get('/:task_id', taskController.show);
    app.put('/:task_id', taskController.update);
    app.delete('/:task_id', taskController.destroy);
};