import Main from "../models/Main";
import Project from "../models/project";
import Todo from "../models/todo";

function populateStorage() {
  const prevStorage = localStorage.getItem("data");
  if (prevStorage == null) {
    return new Main();
  } else {
    const parsedData = JSON.parse(prevStorage);
    let projects = [];
    for (let project of parsedData["projects"]) {
      const projectTitle = project.title;
      let todos = [];
      for (let todo of project["todos"]) {
        const todoTitle = todo.title;
        const todoPriority = todo.priority;
        const todoDescription = todo.desc;
        const todoDueDate = todo.dueDate;
        const parsedTodo = new Todo(
          todoTitle,
          todoPriority,
          todoDescription,
          todoDueDate
        );
        todos.push(parsedTodo);
      }
      const parsedProject = new Project(projectTitle);
      parsedProject.todos = todos;
      projects.push(parsedProject);
    }
    const app = new Main();
    app.projects = projects;
    return app;
  }
}

function saveStorage(app) {
  localStorage.setItem("data", JSON.stringify(app));
}

export { populateStorage, saveStorage };
