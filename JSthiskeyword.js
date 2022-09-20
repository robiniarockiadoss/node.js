console.log("This keyword");
const employee1 = {
    firstName: "Rocky",
    lastName: "Stew",
    id: 2453,
    fullName : function() {//this in method
      return this.firstName + " " + this.lastName;//this refers the employee1 object
    }
  };
  console.log(employee1.fullName());
   
  let x1 = this;//Alone this refers to the global object
 
  console.log("Alone this : " , x1);

  "use strict";
  let x = this;//Alone this refers to the global object
  //console.log("Alone this : ", + a );
  console.log("Alone this use strict : " , x);

  console.log("Function: " ,  myFunction());
  function myFunction() {//this in a function(default)
    return this;//In a function, the global object is the default binding for this
  }

  "use strict";
   console.log("Function use strict : " ,myFunction ());
   function myFunction() {
   return this;
}

const person1 = { 
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"Alen",
    lastName: "Jerom",
  }
  
  let x2 = person1.fullName.call(person2);//calls person1.fullName with person2 as an argument, this refers to person2, even if fullName is a method of person1 
  console.log("Explicit function binding : ",x2); 

  const person = {
    firstName:"Alen",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Brenndon",
    lastName: "Krish",
  }
  
  let fullName = person.fullName.bind(member);//bind() method, an object can borrow a method from another object
  console.log( "Function Borrowing : ", fullName());//member object borrows the fullname method from the person object

  