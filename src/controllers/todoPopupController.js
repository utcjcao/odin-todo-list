export function todoPopupController() {
  const todoPopupBtn = document.getElementById("todo-popup-button");
  const exitTodoBtn = document.getElementById("todo-exit");

  // Handle todo popup toggle
  todoPopupBtn.addEventListener("click", () => {
    const projectPopDiv = document.getElementById("add-proj-container");
    const projectPopStyle = window.getComputedStyle(projectPopDiv);

    if (projectPopStyle.display == "none") {
      const todoPopDiv = document.getElementById("add-todo-container");
      todoPopDiv.style.display = "flex";
    }
  });

  // Handle todo popup close
  exitTodoBtn.addEventListener("click", () => {
    const popDiv = document.getElementById("add-todo-container");
    popDiv.style.display = "none";
  });
}
