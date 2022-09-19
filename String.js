console.log("JavaScript String Methods");

//to find the length of the string
console.log("String Length : ");
let text1 = "I love the World";
console.log(text1.length);

//to slice the string ( cut the string from first and last)
console.log("String Slice : ");
console.log(text1.slice(1,10));//get the value from after  4 and ends before 20
console.log(text1.slice(5));//value get from after 5 
console.log(text1.slice(-10));//count starts from last like right to left

//subString
console.log("String SubString : ");
console.log(text1.substring(2,15));//start from 2 and continue upto 10 output is:"love the Worl"

//substr() is similar to slice()
console.log("String SubStr : ");
console.log(text1.substring(2,15));//start from 2 and continue upto 10 output is:"love the Worl"

//replace() method replaces a specified value with another value in a string

let  text2= "this is my world";//only replace the first match
let text3 = text2.replace("world","universe");
console.log("String Replace Method : ",text3);

//in replace() use/i for the given value is uppercase or lowercase.but its replace the value
let text4  = "This WORLD is my world";
let newText4 = text4.replace(/world/i,"universe");
console.log("String Replace method with /i : ", newText4);

//use /g to replace all the matches
let text5 = " this home is my home";
let  newText5=text5.replace(/home/g,"house");
console.log("String Replace method with /g : ",newText5);

//JavaScript string into UpperCase
let text6  =  text5.toUpperCase();
console.log("Change to uppercase : ",text6);

//JavaScript string into LowerCase
let text7  =  text6.toLowerCase();
console.log("Change to lowercase : ",text7);

//concat() method joins two or more strings
let text8 = text6.concat("",text7);
console.log("String concat:",text8);

//trim() method removes whitespace from both sides of a string
let str1 = "       welcome to our native       ";
let str2 = str1.trim();
console.log("Trims() Method: " + "Length str1 = " + str1.length +" Length str2 = " + str2.length);

//trimStart() method works like trim(), but removes whitespace only from the start of a string
let str3 = str1.trimStart();
console.log("TrimStart method: "+ "Length str1 = " + str1.length +" Length str3 = " + str3.length);

//trimEnd() method works like trim(), but removes whitespace only from the end of a string
let str4 = str1.trimEnd();
console.log("TrimEnd method: "+ "Length str1 = " + str1.length +" Length str4 = " + str4.length);

//padStart() method pads a string with another string
let text9 = "3";
console.log("padStart method: "+text9.padStart(4,"0"));

//padEnd() method pads a string with another string
let text10 = "3";
console.log("padEnd method: "+text10.padEnd(4,"0"));
