const router = require('express').Router();
const taskRoute = require('./task.route');

module.exports = router.use('/tasks', taskRoute);