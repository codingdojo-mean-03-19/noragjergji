const express = require('express'),
      mongoose = require ('mongoose'),
      bodyParser = require('body-parser'),
      path = require('path'),
      app = express();

require('./server/config/database');

app.use(express.static(path.join(__dirname, 'dist/public')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(require('./server/routes'));

app.listen(8000, function(){
    console.log("listening on port 8000");
})

