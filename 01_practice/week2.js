// object creation
const person = { 
    name1: 'John',
    age: 20
};
console.log(typeof person); // object

console.log(person.name1);
console.log(person["name1"]);

// nested object
const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student.marks.science); // 70

const person1 = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello') }
}

person1.greet(); // hello