let num = prompt("Enter a number");

if (num.length !== 10 || isNaN(num)) {
  console.log("Invalid ISBN");
} else {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    let digit = parseInt(num[i]);
    sum = sum + digit * (i + 1);
  }

  if (sum % 11 == 0) console.log("Valid ISBN");
  else console.log("Invalid ISBN");
}
