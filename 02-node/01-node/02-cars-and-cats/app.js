// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/cars/blue.car.png") {
        fs.readFile('./images/cars/blue.car.png', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/cars/green-car.jpg") {
        fs.readFile('./images/cars/green-car.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/cars/purple-car.png") {
        fs.readFile('./images/cars/purple-car.png', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    

    else if (request.url === "/cats") {
         fs.readFile('cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/images/cats/kitty-1.jpg") {
        fs.readFile('./images/cats/kitty-1.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/cats/kitty-2.jpg") {
        fs.readFile('./images/cats/kitty-2.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/cats/kitty-3.jpg") {
        fs.readFile('./images/cats/kitty-3.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cars/new") {
        fs.readFile('new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
   }
    // request didn't match anything:
    else {
        response.end('Unavailable URL request!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");
