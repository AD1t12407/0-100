const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;

const str3 = "Hello";
const firstCharacter = str3[0]; // H
const secondCharacter = str3[0]; // e
const thirdCharacter = str3[0]; // l

let str1 = "Hello";
str1[0] = "Y";
console.log(str1); // Hello

const message = 'Hello, world!';
console.log(message.toUpperCase()); // HELLO, WORLD!
console.log(message.toLowerCase()); // hello, world!



const message1= 'Hello, world!';
console.log(message1.charAt(4)); // o

const firstName1 = 'John';
const lastName1 = 'Doe';
const fullName1 = firstName1.concat(' ', lastName1);

console.log(fullName1); // John Doe

const message2 = "Hello, world!";
const substring = message2.substring(7, 12);
console.log(substring); // world

const message3 = "Hello, world!";
const substring1 = message3.substring(7);
console.log(substring1); // world!

let stri = "Hello";
stri = stri.substring(0, 3) + "p";
console.log(stri) // Help

const message5 = "She said, \"Hello!\"";
console.log(message5); // She said, "Hello!"