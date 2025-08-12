const form = document.querySelector("form");
const input = document.querySelector("#input");
const todo = document.querySelector("#todo");
const warn = document.querySelector("#warn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  warn.innerText = "";
  const todoItems = document.createElement("li");
  todoItems.classList.add("list-items");

  if (input.value != "") {
    todoItems.innerText = input.value;
    todo.appendChild(todoItems);
  } else {
    warn.innerText = "Todo cannot be empty";
  }
  input.value = "";

  todoItems.addEventListener("click", (e) => {
    todoItems.remove();
  });
});
