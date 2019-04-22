const mongoose = require('mongoose'),
      path = require('path'),
      fs = require('fs'),
      modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/rest-tasks', {
    useCreateIndex: true,
    useNewUrlParser: true,
});

mongoose.connection.once('connected', () => console.log('Connected to MongoDB'));

fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelsPath, file)));