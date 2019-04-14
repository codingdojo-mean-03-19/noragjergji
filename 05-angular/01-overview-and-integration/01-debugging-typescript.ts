// Challenge 1.

var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = '9';
// Solution - Convert the number to string since we've declared myString as a string type

// Challenge 2.

function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 console.log(sayHello('9'));
//Solution - Pass the number in form of a string

// Challenge 3.

function fullName(firstName: string, lastName: string, middleName?: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullName("Jimbo", "Jones"));

 //Solution - If we do not posses part of the data, we can add a ? at the end of declaration

 // Challenge 4.

 interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));

 //Solution - Change belt to belts for jay

 // Challenge 5

 class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const turing = new Ninja('Alan', 'Turing');
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 // const turing = {
 //    firstName: "Alan",
 //     lastName: "Turing",
 //     fullName: "Alan Turing"
 // }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing));
 // Solution , Add new in front of ninja and pass 2 arguments inside. Remove the redundant
 //code.

 // Challenge 6

 var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => x * x;
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x,y) => x * y;
// Nor is this working:
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}
//Solution - Line 4 - no need for brackets, line 8 small brackets around x,y,
// wrap the math function in brackets

// Challenge 7

class Elephant {
    constructor(public age: number){}
        birthday = () => {
        this.age++;
     }
 
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
 // Solution - Fixed this by using an arrow function in the Elephant class.
