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
  const editeBtn = document.createElement("i");
  editeBtn.classList.add("fa-regular");
  editeBtn.classList.add("fa-pen-to-square");
  todoEl.textContent = todoText;
  todoEl.appendChild(editeBtn);

  // todoEl.addEventListener("click", () =>
  //   todoEl.classList.toggle("completed")
  // );

  editeBtn.addEventListener("click", () => {
    input.value = todoEl.textContent;
    console.log(todoText);
    todoEl.remove();
  });

  todoEl.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    todoEl.remove();
  });

  // todosUL.appendChild(todoEl);
  todosUL.insertAdjacentElement("afterbegin", todoEl);
  input.value = "";
}
