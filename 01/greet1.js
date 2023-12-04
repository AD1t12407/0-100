import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your name: ', (userName) => {
  console.log(`Hello, ${userName}!`);
  rl.close();
});
