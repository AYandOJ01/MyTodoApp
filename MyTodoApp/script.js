document.addEventListener('DOMContentLoaded', () => {
  const newTaskForm = document.getElementById('new-task-form');
  const taskList = document.getElementById('task-list');
  const productivityScore = document.getElementById('productivity-score');

  let tasks = [];

  // Add a new task
  function addTask(event) {
    event.preventDefault();

    const taskName = document.getElementById('task-name').value;
    const taskActivity = document.getElementById('task-activity').value;

    const newTask = {
      name: taskName,
      activity: taskActivity,
      completed: false
    };

    tasks.push(newTask);
    updateTaskList();
    updateProductivityScore();
    resetForm();
  }

  // Toggle task completion
  function toggleTaskCompletion(event) {
    const taskId = event.target.parentElement.getAttribute('data-task-id');
    const task = tasks[taskId];

    if (task) {
      task.completed = !task.completed;
      updateTaskList();
      updateProductivityScore();
    }
  }

  // Remove a task
  function removeTask(event) {
    const taskId = event.target.parentElement.getAttribute('data-task-id');
    tasks.splice(taskId, 1);
    updateTaskList();
    updateProductivityScore();
  }

  // Update the task list
  function updateTaskList() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
      const taskItem = document.createElement('li');
      taskItem.setAttribute('data-task-id', index);

      const taskCheckbox = document.createElement('input');
      taskCheckbox.type = 'checkbox';
      taskCheckbox.checked = task.completed;
      taskCheckbox.addEventListener('change', toggleTaskCompletion);

      const taskLabel = document.createElement('label');
      taskLabel.textContent = `${task.name} - ${task.activity}`;

      const taskDeleteButton = document.createElement('button');
      taskDeleteButton.textContent = 'Delete';
      taskDeleteButton.addEventListener('click', removeTask);

      taskItem.appendChild(taskCheckbox);
      taskItem.appendChild(taskLabel);
      taskItem.appendChild(taskDeleteButton);

      if (task.completed) {
        taskItem.classList.add('completed');
      }

      taskList.appendChild(taskItem);
    });
  }

  // Update the productivity score
  function updateProductivityScore() {
    const completedTasks = tasks.filter(task => task.completed);
    const productivity = tasks.length > 0 ? completedTasks.length / tasks.length : 0;
    productivityScore.textContent = (productivity * 100).toFixed(2);
  }

  // Reset the form
  function resetForm() {
    newTaskForm.reset();
  }

  // Event listener for form submission
  newTaskForm.addEventListener('submit', addTask);

  // Initial task list update
  updateTaskList();
});
