document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task');
        return;
    }

    // Create a new list item for the task
    const li = document.createElement('li');
    li.textContent = taskValue;

    // Create a delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    // Add the delete button to the list item
    li.appendChild(deleteButton);

    // Add the list item to the task list
    document.getElementById('taskList').appendChild(li);

    // Clear the input field
    taskInput.value = '';
});
