const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/task_db')

mongoose.Promise = global.Promise;
