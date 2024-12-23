import {
  addProjectController,
  deleteProjectController,
} from "../controllers/projectController";
import { deleteTodoController } from "../controllers/todoController";
import { todoPopupController } from "../controllers/todoPopupController";

export function updateTodoDisplay(app) {
  const todoContainerDiv = document.getElementById("todo-container");
  todoContainerDiv.innerHTML = "";
  const curProjId = app.getCurrentProjId();
  if (curProjId != -1) {
    const curProj = app.projects.find((p) => p.id === curProjId);
    for (let todo of curProj.todos) {
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");

      const todoTitleDiv = document.createElement("div");
      const todoDescDiv = document.createElement("div");
      const todoPriorityDiv = document.createElement("div");
      const todoDueDateDiv = document.createElement("div");
      const deleteTodoBtn = document.createElement("input");

      todoTitleDiv.textContent = todo.title;

      todoTitleDiv.classList.add("todo-title");

      todoDescDiv.textContent = todo.desc;
      todoPriorityDiv.textContent = todo.priority;
      todoDueDateDiv.textContent = todo.dueDate;
      deleteTodoBtn.type = "checkbox";

      todoDescDiv.classList.add("todo-items");
      todoPriorityDiv.classList.add("todo-items");
      todoDueDateDiv.classList.add("todo-items");
      deleteTodoBtn.classList.add("todo-items");

      deleteTodoController(app, todo.id, deleteTodoBtn);

      todoDiv.appendChild(todoTitleDiv);
      todoDiv.appendChild(todoDescDiv);
      todoDiv.appendChild(todoPriorityDiv);
      todoDiv.appendChild(todoDueDateDiv);
      todoDiv.appendChild(deleteTodoBtn);

      todoContainerDiv.appendChild(todoDiv);
    }

    const btnContainer = document.createElement("div");

    const addTodoBtn = document.createElement("button");
    addTodoBtn.id = "todo-popup-button";
    addTodoBtn.innerText = "add todo + ";

    btnContainer.appendChild(addTodoBtn);

    const deleteProjBtn = document.createElement("button");
    deleteProjBtn.id = "delete-proj-button";
    deleteProjBtn.innerText = "delete project - ";

    btnContainer.appendChild(deleteProjBtn);

    todoContainerDiv.appendChild(btnContainer);

    todoPopupController();
    deleteProjectController(app);
  }
}
