var express = require("express");

var app = express();

const cat_info = [
    {name: 'Kira', img: "/images/kitty-3.jpg", age: '3', fun_fact: 'Thinks she is a dog', fav_foods: ['Salmon', 'Mice', 'Anything my hooman eats']},
    {name: 'Flour', img: "/images/kitty-2.jpg", age: '2', fun_fact: 'Loves toilet water', fav_foods: ['Chicken', 'Salmon']},
    {name: 'Peach', img: "/images/kitty-1.jpg", age: '2', fun_fact: "Sleeps with a feather duster?!", fav_foods: ['Cat food', 'Tuna']}
]

app.get('/', function(request, response){
    response.send("<h1>Hello! Go to /cats to see some cute kitties.</h1>")
})

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/cats', function(request, response){
    response.render("cats")
})

app.get('/cats/kira', function(request, response){
    response.render("details", {cats: cat_info[0]});
});

app.get('/cats/peach', function(request, response){
    response.render("details", {cats: cat_info[2]});
});

app.get('/cats/flour', function(request, response){
    response.render("details", {cats: cat_info[1]});
});



app.listen(8000, function(){
    console.log("listening on port 8000")
})