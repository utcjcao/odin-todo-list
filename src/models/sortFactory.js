function sortFactory(sortType) {
  if (sortType == "date") {
    return function (todoA, todoB) {
      const dateA = Date(todoA.dueDate);
      const dateB = Date(todoB.dueDate);
      return dateA - dateB;
    };
  } else if (sortType == "title") {
    return function (todoA, todoB) {
      const nameA = todoA.title.toLowerCase();
      const nameB = todoB.title.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    };
  } else if (sortType == "priority") {
    return function (todoA, todoB) {
      const priorityA = todoA.priority;
      const priorityB = todoB.priority;
      if (priorityA < priorityB) return -1;
      if (priorityA > priorityB) return 1;
      return 0;
    };
  } else {
    return Error;
  }
}
