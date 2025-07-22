let prompt = require('prompt-sync')(); // npm i prompt-sync
let n = Number(prompt('enter a number: '));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(64 + j) + " ");
//   }
//   console.log();
// }


// for (let i = 1; i <= n; i++) {
//   for (let j = n; j >= i; j--) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (j <= n - i) {
//       process.stdout.write(" ");
//     } else {
//       process.stdout.write("* ");
//     }
//   }
//   console.log();
// }

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= (n * 2) - 1; j++) {
//     if (i == j || i + j == n * 2) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }