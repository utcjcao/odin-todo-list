class Todo {
  constructor(title, dueDate, desc, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.desc = desc;
    this.priority = priority;
    this.id = crypto.randomUUID();
  }
}

export default Todo;
