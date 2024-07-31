const taskuud = [];
let task = "";
const toDoInput = document.getElementById("to do input");
toDoInput.addEventListener("input", function () {
  task = event.target.value;
});
const toDoButton = document.getElementById("to do button");
toDoButton.addEventListener("click", addTask);

function addTask() {
  taskuud.push(task);
  toDoInput.value = "";
  task = "";

  clearTasks();
  displayTasks();
}
function clearTasks() {
  const toDoList = document.getElementById("to-do-list");
  toDoList.innerHTML = "";
}

function displayTasks() {
  for (let i = 0; i < taskuud.length; i++) {
    const taskItem = document.createElement("li"); // <li></li>
    taskItem.innerHTML = taskuud[i]; // <li>wash</li>
    document.getElementById("to-do-list").appendChild(taskItem); // <ul><li>wash</li></ul>
  }
}
