let a = Number(prompt("Enter fist number"));
let b = Number(prompt("Enter second number"));
let gcd = 0;
for (let i = 1; i <= a; i++) {
  if (a % i == 0 && b % i == 0) {
    gcd = i;
  }
}

console.log(gcd);
