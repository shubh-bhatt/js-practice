const PI = 3.14;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myRadius").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  console.log(circumference);

  document.getElementById("myH3").textContent = circumference;
};
