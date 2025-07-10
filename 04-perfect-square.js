let num = prompt("Enter the Number");
let isPerfectSqr = false;
for (let i = 1; i * i <= num; i++) {
  console.log(i);

  if (i * i == num) {
    isPerfectSqr = true;
    break;
  }
}

if (isPerfectSqr) {
  console.log("Perfect Square");
} else {
  console.log("Not a Perfect Square");
}
