const fruits = ['apple', 'banana', 'orange'];

for (const fruit of fruits) {
  console.log(fruit);
}
// apple
// banana
// orange


fruits.push('orange');
console.log(fruits); 

fruits.pop();
console.log(fruits); 

fruits.unshift('grape');
console.log(fruits); 

fruits.shift();
console.log(fruits); 

const numbers = [4, 2, 8, 5, 1];

numbers.sort();

console.log(numbers); // [1, 2, 4, 5, 8]
fruits.reverse();
console.log(fruits);
const first=[1,2,3,4];
const second=[5,6,78,8];

const combined=first.concat(second);

console.log(combined);
const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  console.log(grid[0][1]); // Output: 2
  console.log(grid[2][2]); // Output: 9

  for (const row of grid) {
    for (const item of row) {
      console.log(item)
    }
  }