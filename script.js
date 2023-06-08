function createTaskElement(taskText, completed) {
  const taskList = document.createElement("div");
  taskList.className = "task-list";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";
  checkbox.checked = completed;

  const label = document.createElement("label");
  label.className = "task-label";
  label.innerHTML = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.innerHTML = "X";

  taskList.appendChild(checkbox);
  taskList.appendChild(label);
  taskList.appendChild(deleteButton);

  checkbox.addEventListener("change", () => {
    label.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });

  deleteButton.addEventListener("click", () => {
    taskList.remove();
  });

  return taskList;
}

function addTask() {
  const input = document.getElementById("input");
  const taskText = input.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("task-list");
    const taskElement = createTaskElement(taskText, false);
    taskList.appendChild(taskElement);

    input.value = "";
  }
}

const addButton = document.getElementById("btn");
addButton.addEventListener("click", addTask);
