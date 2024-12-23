import Project from "./project";

class Main {
  constructor() {
    this.projects = [];
    this.currentProjectId = -1;
  }
  addProject(title) {
    const newProject = new Project(title);
    this.projects.push(newProject);
    this.currentProjectId = -1;
  }
  deleteProject(id) {
    this.projects = this.projects.filter((project) => id != project.id);
    this.currentProjectId = -1;
  }
  setCurrentProjId(id) {
    this.currentProjectId = id;
  }
  getCurrentProjId() {
    return this.currentProjectId;
  }
  //   assuming that the curProj is not empty (-1)
  addTodo(todo) {
    let curProj = this.projects.find(
      (project) => this.currentProjectId == project.id
    );

    if (curProj) {
      curProj.addTodo(todo);
    } else {
      console.log("No project found with currentProjectId");
    }
  }

  // also assuming that the proj id != -1
  deleteTodo(id) {
    let curProj = this.projects.find(
      (project) => this.currentProjectId == project.id
    );

    if (curProj) {
      curProj.deleteTodo(id);
    } else {
      console.log("No todo found with id");
    }
  }
}

export default Main;
