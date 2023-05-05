const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");
const deletedUL = document.getElementById("deleted");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  adTodo();
});

function adTodo() {
  let todoText = input.value;
  if (!todoText) return;

  const todoEl = document.createElement("li");

  todoEl.textContent = todoText;

  todoEl.addEventListener("click", () =>
    todoEl.classList.toggle("completed")
  );

  todoEl.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    todoEl.remove();
  });

  todosUL.insertAdjacentElement("afterbegin", todoEl);
  input.value = "";
}
