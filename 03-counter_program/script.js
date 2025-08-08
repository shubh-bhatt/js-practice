let count = 0;

document.getElementById("decreaseBtn").onclick = function () {
  count = document.getElementById("countLabel").textContent;
  count = Number(count);
  count--;
  document.getElementById("countLabel").textContent = count;
};

document.getElementById("resetBtn").onclick = function () {
  document.getElementById("countLabel").textContent = 0;
};

document.getElementById("increaseBtn").onclick = function () {
  count = document.getElementById("countLabel").textContent;
  count = Number(count);
  count++;
  document.getElementById("countLabel").textContent = count;
};
