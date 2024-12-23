import Project from "../models/project";
import { updateProjDisplay } from "../views/updateProjDisplay";
import { updateTodoDisplay } from "../views/updateTodoDisplay";
import { saveStorage } from "./storage";

function addProjectController(app) {
  const addProjectBtn = document.getElementById("add-proj-button");
  addProjectBtn.addEventListener("click", () => {
    let projectTitle = document.getElementById("proj-title").value;
    document.getElementById("proj-title").value = "";
    if (projectTitle == "") {
      projectTitle = "placeholder project title";
    }
    app.addProject(projectTitle);

    const projectPopDiv = document.getElementById("add-proj-container");
    projectPopDiv.style.display = "none";

    app;

    updateProjDisplay(app);
    updateTodoDisplay(app);
    saveStorage(app);
  });
}

function deleteProjectController(app) {
  const deleteProjBtn = document.getElementById("delete-proj-button");
  deleteProjBtn.addEventListener("click", () => {
    const projectId = app.getCurrentProjId();
    app.deleteProject(projectId);

    updateProjDisplay(app);
    updateTodoDisplay(app);
    saveStorage(app);
  });
}

function switchProjectController(app, id, button) {
  button.addEventListener("click", () => {
    app.setCurrentProjId(id);
    const buttons = document.querySelectorAll(".project-container button");
    for (let button of buttons) {
      button.style["background-color"] = "white";
      button.style["color"] = "black";
    }
    button.style["background-color"] = "black";
    button.style["color"] = "white";
    updateTodoDisplay(app);
  });
}

export {
  addProjectController,
  deleteProjectController,
  switchProjectController,
};
