function total(){
let firstsemester = 70; 
let secondsemester = 75;
let thirdsemester = 65;
let fourthsemester = 70;
let fifthsemester = 75;
let sixthsemester = 80;
let seventhsemester = 85;
let eighthsemester = 90;

// Equal to Operator == 
if(firstsemester==10){  
console.log("mark is equal to 10");  
}  
// Not equal to !=
else if(secondsemester !=75){ 
    
    console.log("mark is not equal to 75");  
}  
//strict equal operator ===
else if(thirdsemester === 40){  
    console.log("mark is strict equal to 40");  
} 
 // strict not equal operator !==
 else if(fourthsemester !== 70){  
    console.log("mark is not strict equal to 70");  
} 

// greater than operator >
else if(fifthsemester > 100){  
console.log("mark is greater than  to 100");  
}  
// greater than or equal operator >=
else if(sixthsemester >= 90){  
console.log("mark is  greater than or equal to 90");  
} 
// less than operator <

else if(seventhsemester < 50){  
console.log("mark is less than to 50");  
} 
// less than or equal operator <=

else if(eighthsemester <= 70){  
console.log("mark is less than or equal to 70");  
}  
else{  

console.log("Total mark is: ")
console.log("first semester: ",fifthsemester);
console.log("second semester: ",secondsemester);
console.log("third semester: ",thirdsemester);
console.log("fourth semester: ",fourthsemester);
console.log("fifth semester: ",fifthsemester);
console.log("sixth semester: ",sixthsemester);
console.log("seventh semester: ",seventhsemester);
console.log("eighth semester: ",eighthsemester);
console.log("passed in all the semester");  
}  
}
total();