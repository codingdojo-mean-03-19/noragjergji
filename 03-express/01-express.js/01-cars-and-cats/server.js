var express = require("express");
var app = express();

app.get('/', function(request, response) {
  
   // use the response object's .send() method to respond with an h1
  response.send("<h1>Hello Express</h1>");
})

app.use(express.static(__dirname + "/static"));

// listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
