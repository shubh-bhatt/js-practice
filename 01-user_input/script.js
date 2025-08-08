let username;

document.getElementById("btn").onclick = function () {
  let username = document.getElementById("myInput").value;
  document.getElementById("myH1").textContent = `Hello ${username}`;
};
