const router = require('express').Router();
const taskRouter = require('./task.route');

// makes all the routes /tasks
module.exports = router.use('/tasks', taskRouter);