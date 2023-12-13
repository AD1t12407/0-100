


//The for...of loop was introduced in the later versions of JavaScript ES6.
//The for..of loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc).
// array
const students = ['John', 'Sara', 'Jack'];

// using for...of
for ( let element of students ) {

    // display the values
    console.log(element);
}
// string
const string = 'code';

// using for...of loop
for (let i of string) {
    console.log(i);
}
// define Set
const set = new Set([1, 2, 3]);

// looping through Set
for (let i of set) {
    console.log(i);
}