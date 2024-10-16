// Mengambil elemen DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Fungsi untuk menambah tugas
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Done';
    completeButton.classList.add('complete-btn');
    completeButton.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(taskSpan);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = '';
}

// Event listener untuk tombol "Add Task"
addTaskButton.addEventListener('click', addTask);

// Event listener untuk menambahkan tugas saat menekan "Enter"
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
