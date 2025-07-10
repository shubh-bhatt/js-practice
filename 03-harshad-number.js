let num = prompt("Enter the number");
let sum = 0;

for (let i = num.length - 1; i >= 0; i--) {
  let digit = parseInt(num[i]);
  sum += digit;
}

if (parseInt(num) % sum == 0) {
  console.log("Harshad Number");
} else {
  console.log("Not a Harshad Number");
}
