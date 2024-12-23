export function handlePopupsController() {
  const projectPopUpBtn = document.getElementById("proj-popup-button");
  const todoPopupBtn = document.getElementById("todo-popup-button");
  const exitProjectBtn = document.getElementById("proj-exit");
  const exitTodoBtn = document.getElementById("todo-exit");

  // Handle project popup toggle
  projectPopUpBtn.addEventListener("click", () => {
    console.log("daf");

    const todoPopDiv = document.getElementById("add-todo-container");
    const todoPopStyle = window.getComputedStyle(todoPopDiv);

    if (todoPopStyle.display == "none") {
      const projectPopDiv = document.getElementById("add-proj-container");
      projectPopDiv.style.display = "flex";
      // app.addProject("placeholder"); // Uncomment this when the method is needed
    }
  });

  // Handle todo popup toggle
  todoPopupBtn.addEventListener("click", () => {
    const projectPopDiv = document.getElementById("add-proj-container");
    const projectPopStyle = window.getComputedStyle(projectPopDiv);

    if (projectPopStyle.display == "none") {
      const todoPopDiv = document.getElementById("add-todo-container");
      todoPopDiv.style.display = "flex";
    }
  });

  // Handle project popup close
  exitProjectBtn.addEventListener("click", () => {
    const popDiv = document.getElementById("add-proj-container");
    popDiv.style.display = "none";
  });

  // Handle todo popup close
  exitTodoBtn.addEventListener("click", () => {
    const popDiv = document.getElementById("add-todo-container");
    popDiv.style.display = "none";
  });
}
