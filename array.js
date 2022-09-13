console.log("Array Methods");
let a = ["Robini","Rakesh","Ramu","Reyon",'9876540321'];
let b = ["chennai","Andhra","bangalore"];
//sort
console.log("Array sorting");
console.log(a.sort());
//reverse
console.log("Array reverse");
console.log(a.reverse());
//concat
console.log("Array concat");
console.log(a.concat(b));
//length
console.log(" Array length");
console.log(a.length);
//join
console.log("Array joining");
console.log(a.join("-"));
//pop
console.log("Array pop");
a.pop();
//shift
console.log("Array shift");
a.shift();
console.log(a);
//push
console.log("Array push");
a.push("India");
//slice
console.log("Slice");
console.log(a.slice(2,4));
//splice
console.log("Splice");
console.log(a.splice(3,0,"senior"));
console.log(a);