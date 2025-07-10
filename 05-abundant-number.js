let num = Number(prompt("Enter a number"));
let sum = 0;

for (let i = 1; i <= Math.floor(num / 2); i++) {
  if (num % i == 0) {
    sum += i;
  }
}

if (sum > num) {
  console.log("Abundant Number");
} else {
  console.log("Not a Abundant Number");
}
