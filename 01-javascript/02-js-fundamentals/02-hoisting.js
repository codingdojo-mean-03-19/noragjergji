// Challenge 1.

// console.log(hello);                                   
// var hello = 'world';  

var hello;
console.log(hello);
hello = 'world'; //logs undefined 

//Challenge 2.

// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle) //logs magnet when test called
}
test()

// Challenge 3

// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

var brendan = 'super cool'
function print(){
    var brendan;
    brendan = 'only okay';
    console.log(brendan) //logs only okay
}
console.log(brendan) //logs super cool

// Challenge 4

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

var food ='chicken'
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food) //logs half-chicken
    food = 'gone'
}
console.log(food) //logs chicken
eat()


// Challenge 5

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

var mean;
var food;
console.log(food); //logs undefined
mean = function(){
    var food;
    food = 'chicken';
    console.log(food) //logs chicken
    food = 'fish';
    console.log(food) // logs fish
}
console.log(food) // global variable food has no value assigned to it - undefined


// Challenge 6

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

var genre;
console.log(genre) // logs undefinec
var rewind;
rewind = function(){
    var genre;
    genre = 'rock';
    console.log(genre); //logs rock
    genre = 'r&b';
    console.log(genre); //logs r&b
}
genre = 'disco';
console.log(genre) //logs disco

// Challenge 7

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

var dojo;
var learn;
learn = function(){
    var dojo;
    dojo = 'seattle';
    console.log(dojo); //logs seattle
    dojo = 'burbank';
    console.log(dojo); //logs burbank
}
dojo = 'san jose'
console.log(dojo); //logs san jose
console.log(dojo); //logs san jose

// Challenge 8

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }






