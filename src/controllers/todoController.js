import Todo from "../models/todo";
import { updateTodoDisplay } from "../views/updateTodoDisplay";
import { saveStorage } from "./storage";

function addTodoController(app) {
  const addTodoBtn = document.getElementById("add-todo-button");
  addTodoBtn.addEventListener("click", () => {
    let todoTitle = document.getElementById("todo-title").value;
    if (todoTitle == "") {
      todoTitle = "placeholder todo title";
    }
    document.getElementById("todo-title").value = "";
    let todoPriority = document.getElementById("todo-priority").value;
    if (todoPriority == "") {
      todoPriority = 0;
    }
    document.getElementById("todo-priority").value = "";
    let todoDescription = document.getElementById("todo-desc").value;
    if (todoDescription == "") {
      todoDescription = "placeholder todo description";
    }
    document.getElementById("todo-desc").value = "";
    let todoDueDate = document.getElementById("datepicker").value;
    if (todoDueDate == "") {
      todoDueDate = new Date();
    }
    document.getElementById("datepicker").value = "";
    const newTodo = new Todo(
      todoTitle,
      todoDueDate,
      todoDescription,
      todoPriority
    );
    app.addTodo(newTodo);
    // turn the popup off
    const todoPopDiv = document.getElementById("add-todo-container");
    todoPopDiv.style.display = "none";

    updateTodoDisplay(app);
    saveStorage(app);
  });
}

function deleteTodoController(app, id, button) {
  button.addEventListener("click", () => {
    app.deleteTodo(id);
    updateTodoDisplay(app);
    console.log(app);
  });
  saveStorage(app);
}

export { addTodoController, deleteTodoController };
