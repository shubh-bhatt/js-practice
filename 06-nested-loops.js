let prompt = require('prompt-sync')(); // npm i prompt-sync
let n = prompt('enter a number: ');

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
   process.stdout.write('* ');
  }
  console.log();
}