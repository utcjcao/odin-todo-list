import { projectPopupController } from "../controllers/projectPopupController";
import { switchProjectController } from "../controllers/projectController";

export function updateProjDisplay(app) {
  const projectContainerDiv = document.getElementById("project-container");
  projectContainerDiv.innerHTML = "";

  for (let project of app.projects) {
    const projectBtn = document.createElement("button");
    projectBtn.innerText = project.title;
    switchProjectController(app, project.id, projectBtn);
    projectContainerDiv.appendChild(projectBtn);
  }

  const addProjectBtn = document.createElement("button");
  addProjectBtn.id = "proj-popup-button";
  addProjectBtn.innerText = "add project + ";

  projectContainerDiv.appendChild(addProjectBtn);

  projectPopupController();
}
