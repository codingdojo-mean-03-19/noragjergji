const mongoose = require('mongoose'),
      path = require('path'),
      fs = require('fs');

const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/restful-crud', {
  useCreateIndex: true,
  useNewUrlParser: true,
});

mongoose.connection.once('connected', () =>
  console.log('Connected to MongoDB')
);

fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelsPath, file)));