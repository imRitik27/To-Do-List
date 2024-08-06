// Initialize an empty task list
const tasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        updateTaskList();
    }
}

// Function to mark a task as completed
function toggleCompleted(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

// Function to update the task list display
function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) {
            li.classList.add('completed');
        }
        li.addEventListener('click', () => toggleCompleted(index));
        li.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            deleteTask(index);
        });
        taskList.appendChild(li);
    });
}