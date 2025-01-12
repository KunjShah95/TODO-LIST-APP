// Get the elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add task to the list
function addTask() {
    const todoText = todoInput.value.trim();
    
    if (todoText !== "") {
        // Create a new list item (li)
        const li = document.createElement('li');
        li.textContent = todoText;

        // Create a delete button for the task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.style.marginLeft = "10px"; // Add some basic styling
        
        // Add event listener to delete button
        deleteButton.addEventListener('click', function() {
            li.remove(); // Remove the task from the list
        });

        // Append the delete button to the list item
        li.appendChild(deleteButton);

        // Append the list item to the todo list
        todoList.appendChild(li);

        // Clear the input field
        todoInput.value = "";
    }
}

// Add task on button click
addButton.addEventListener('click', addTask);

// Add task on Enter key press
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
