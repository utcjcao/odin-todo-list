export function projectPopupController() {
  const projectPopUpBtn = document.getElementById("proj-popup-button");
  const exitProjectBtn = document.getElementById("proj-exit");

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

  // Handle project popup close
  exitProjectBtn.addEventListener("click", () => {
    const popDiv = document.getElementById("add-proj-container");
    popDiv.style.display = "none";
  });
}
