let prompt = require('prompt-sync')();
let n = Number(prompt('Enter a number: '));

let sum = 0;

while (n > 0) {
  let temp = n % 10;
  n = Math.floor(n / 10);
  let fact = 1;
  for (let i = 1; i <= temp; i++) {
    fact = fact * i;
  }
  sum = sum + fact;
}

console.log('The sum is: ' + sum);