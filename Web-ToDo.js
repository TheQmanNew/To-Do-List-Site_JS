document.addEventListener('DOMContentLoaded', () => {
    const taskform = document.getElementById('task-form');
    const taskinput = document.getElementById('task-input');
    const tasklist = document.getElementById('task-list');
    taskform.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskinput.value);
        taskinput.value = '';
    })
})

function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}