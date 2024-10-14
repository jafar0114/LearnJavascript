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

    // Membuat elemen <li> baru
    const li = document.createElement('li');

    // Membuat teks tugas
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Membuat tombol "Selesai"
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Done';
    completeButton.classList.add('complete-btn');
    completeButton.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Membuat tombol "Hapus"
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // Menambahkan elemen ke dalam <li>
    li.appendChild(taskSpan);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    // Menambahkan <li> ke dalam <ul>
    taskList.appendChild(li);

    // Mengosongkan input setelah menambah tugas
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
