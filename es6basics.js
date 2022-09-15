console.log("NEW FEATURES IN es6");

console.log("let keyword");//Redeclaring a Variable Using let
let  x = 10;// Here x is 10
{  
  let x = 2;// Here x is 2
}           // Here x is 10
console.log(x);

console.log("const keyword");//const keyword allows you to declare a constant
var  x1 = 11;// Here x is 11
{  
  const x1 = 3; // Here x is 3
}               // Here x is 11
console.log(x1);

console.log("Arrow function");//With arrow functions, you don't have to type the function keyword, the return keyword, and the curly brackets
const x2 = (x2, x3) => x2 * x3;
console.log(x2(4,3));

console.log("Looping over an Array");//for of statement loops through the values of any iterable object
const laptops = ["hp", "lenovo", "dell"];
let text1 = "";
for (let x4 of laptops) {
  text1 += x4 + "<br>";
}
console.log(laptops);

console.log("Looping over an String");//for of statement loops through the values of an iterable object
let currentStatus = "Approved";
let text2 = "";
for (let x5 of currentStatus) {
  text2 += x5 + "<br>";
}
console.log(currentStatus);

console.log("JavaScript Maps");//Object as a key is an important Map feature
//create a objects
// Create Objects
const sem1 = {name: 'Semester1'};
const sem2 = {name: 'Semester2'};
const sem3 = {name: 'Semester3'};

// Create a new Map
const semesters = new Map();

// Add the Objects to the Map
semesters .set(sem1, 1500);
semesters .set(sem2, 1300);
semesters .set(sem3, 2500);

// Display Object Type
console.log(semesters);

console.log("JavaScript Sets");//set.size-display the size of the set
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

// Display set.size
console.log(letters.size);

console.log("JavaScript Classes");//When you have a class, you can use the class to create objects
class Bike {    //create class
  constructor(name, year) {  //constructor
    this.name = name;
    this.year = year;
  }
}
const myBike = new Bike("Royal Enfield", 20);//objects
console.log(myBike.name + " " + myBike.year);


console.log("JavaScript Symbol()");//It represents a unique "hidden" identifier that no other code can accidentally access
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

let id = Symbol('id');
person[id] = 140353;

console.log(person[id] + " " + person.id);

console.log("Default Parameter Values");//ES6 allows function parameters to have default values
function myFunction(x6, x7 = 10) {
  // x7 is 10 if not passed or undefined
  return x6 + x7;
}
console.log( myFunction(5)); 

console.log("Function Rest Parameter");//rest parameter (...) allows a function to treat an indefinite number of arguments as an array
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x8 = sum(2, 3, 5, 7, 11, 13, 17, 19);
console.log(x8);

console.log("String.includes()");//includes() method returns true if a string contains a specified value, otherwise false
let text3 = "Hello world, welcome to the universe.";
console.log(text3.includes("world"));//world is there it returns true otherwise false

console.log("String.startsWith()");//startsWith() method returns true if a string begins with a specified value, otherwise false
console.log(text3.startsWith("Hello"));

console.log("String.endsWith()");//endsWith() method returns true if a string ends with a specified value, otherwise false
console.log(text3.endsWith("false"));

console.log("Array.from()");//Array.from() method returns an Array object from any object with a length property or any iterable object.
const myArr = Array.from("ARRAYWORLD");
console.log(myArr);

console.log("Array keys()");//keys() method returns an Array Iterator object with the keys of an array
const Juices = ["Watermelon","Orange","Apple","Mango"];
const keys = Juices.keys();
let text4 = "";
for (let x9 of keys) {
  text4 += x9 ;
  console.log(text4);
}

console.log("Array find()");//find() method returns the value of the first array element that passes a test function
const numbers = [14, 9, 26, 24, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log("First number over 18 is " + first);

console.log("Array findIndex()");//findIndex() method returns the index of the first array element that passes a test function
console.log("First number over 18 has index " + numbers.findIndex(myFunction));
function myFunction(value, index, array) {
  return value > 18;
}

console.log("New Math Methods");
console.log("Math.trunc() Method");//Math.trunc(x) returns the integer part of x
console.log(Math.trunc(4.9));    // returns 4
console.log(Math.trunc(-4.2));    // returns -4

console.log("Math.sign() Method");//Math.sign(x) returns if x is negative, null or positive
console.log(Math.sign(4));//1
console.log(Math.sign(-4));//-1
console.log(Math.sign(0));//0

console.log("Math.cbrt() Method");//Math.cbrt(x) returns the cube root of x
console.log(Math.cbrt(8));    // returns 2
console.log(Math.cbrt(64));    // returns 4
console.log(Math.cbrt(125));    // returns 5

console.log("Math.log2(x)");//Math.log2(x) returns the base 2 logarithm of x
console.log(Math.log2(2));//returns 1
console.log(Math.log2(4));//returns 2

console.log("Math.log10(x)");//Math.log10(x) returns the base 10 logarithm of x
console.log(Math.log10(2));
console.log(Math.log10(4));

console.log("JavaScript Promise");//A Promise is a JavaScript object that links "Producing Code" and "Consuming Code"
// "Producing Code" (May take some time)
//myResolve- when successful
//myReject- when error
const myPromise = new Promise(function(myResolve, myReject) {
setTimeout(function(){ myResolve("Hi! Hello! How are you?"); }, 3000);
});
// "Consuming Code" (Must wait for a fulfilled Promise).
//function(value) - code if successful 
//function(error) - code if some error 
myPromise.then(function(value) {
  console.log(value);
});
