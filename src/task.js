import './style.css';

const tasks = [{
  index: 1,
  description: 'Attend a meeting',
  completed: false,
},
{
  index: 2,
  description: 'Go to the gym',
  completed: false,
},
{
  index: 3,
  description: 'Go shopping in the supermarket',
  completed: false,
},
];

function task(item) {
  const completeClass = item.completed ? 'strike' : '';
  const completeChecked = item.completed ? 'checked' : '';
  return `<ul class="list">
      <li class="items">
      <div class="details">
      <input type="checkbox" class="checkbox" name="option" id="${item.index}" ${completeChecked} >
      <label for="option1" id="item-list"class="${completeClass}">${item.description}</label>
      </div>
      <div class="icon">
      <i class="fas fa-ellipsis-v color"></i>
      </div>
     </li>
     </ul>
     <div class="line"></div>`;
}
let getTask;
if (localStorage.getItem('taskList') != null) {
  getTask = JSON.parse(window.localStorage.getItem('taskList'));
} else {
  getTask = tasks;
}

const changeState = (e) => {
  const taskId = Number(e.id);
  const task = getTask.find((t) => t.index === taskId);
  task.completed = !task.completed;
  const updatedTasks = getTask.filter((t) => t.index !== taskId);
  updatedTasks.push(task);
  window.localStorage.setItem('taskList', JSON.stringify(updatedTasks));
};

// eslint-disable-next-line no-use-before-define
const checks = handleCheck();

function displayTasks(taskArray = getTask) {
  const list = document.querySelector('#list-items');
  const sortTasks = taskArray.sort((a, b) => a.index - b.index);
  list.innerHTML = sortTasks.map((t) => task(t)).join('');
  checks();
}
const display = displayTasks();

function handleCheck() {
  const checkBoxes = document.querySelectorAll('.checkbox');
  checkBoxes.forEach((checkbox) => checkbox.addEventListener('change', () => {
    changeState(checkbox);
    display();
  }));
}

export { tasks, task, displayTasks };