// Create an object called 'person'
const person = {
    name: "John",
    age: 25,
    city: "ExampleCity",
  };
  
  // Access the value of the 'name' property and assign it to a variable called 'personName'
  const personName = person.name;
  
  // Add a new property to the 'person' object called 'occupation' with a value of 'student'
  person.occupation = "student";
  
  // Add a new function property (method) to the 'person' object called 'printInfo'
  person.printInfo = function() {
    console.log(`Hi, I am ${this.name}.\n I am ${this.age}  years old and \nI live in ${this.city}.`);
  };
  
  // Call the 'printInfo' method to see the output
  person.printInfo();
  