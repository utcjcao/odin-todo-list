import "./template.css";
import Main from "./models/Main";
import { updateProjDisplay } from "./views/updateProjDisplay";
import { updateTodoDisplay } from "./views/updateTodoDisplay";
import {
  addProjectController,
  deleteProjectController,
} from "./controllers/projectController";
import {
  addTodoController,
  deleteTodoController,
} from "./controllers/todoController";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Import flatpickr CSS
import { populateStorage } from "./controllers/storage";

flatpickr("#datepicker", {
  dateFormat: "Y-m-d",
  minDate: "today", // Optional: Disable past dates
  locale: {
    firstDayOfWeek: 1, // Set the first day of the week to Monday
  },
});

const app = populateStorage();

updateProjDisplay(app);
updateTodoDisplay(app);

addProjectController(app);
addTodoController(app);
