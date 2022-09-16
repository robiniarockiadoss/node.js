console.log("New Number Properties");
console.log("EPSILON");//Number Object Properties
let x10 = Number.EPSILON;
console.log(x10);

console.log("MIN_SAFE_INTEGER");//Number Object Properties
let x11 = Number.MIN_SAFE_INTEGER;
console.log(x11);

console.log("MAX_SAFE_INTEGER");//Number Object Properties
let x12 = Number.MAX_SAFE_INTEGER;
console.log(x12);

console.log("New Number Methods");
console.log("Number.isInteger() method");//Number.isInteger() method returns true if the argument is an integer
console.log(Number.isInteger(10));        // returns true
console.log(Number.isInteger(10.5));      // returns false

console.log("Number.isSafeInteger() method");//Number.isSafeInteger() method returns true if the argument is a safe integer
console.log(Number.isInteger(10));        // returns true
console.log(Number.isInteger(1234567895647980));      // returns false

console.log("New Global Methods");
console.log("isFinite() method");//global isFinite() method returns false if the argument is Infinity or NaN
console.log(isFinite(10/0));       // returns false
console.log(isFinite(10/1));       // returns true

console.log("isNaN() method");//global isNaN() method returns true if the argument is NaN. Otherwise it returns false
console.log(isNaN("Hello"));       // returns true

console.log("Object entries()");//entries() method returns an Array Iterator object with key/value pairs
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
for (let y of f) {
  console.log(y + "<br>") ;
}
