// let addToDoButton = document.getElementById('addToDo');
// let toDoContainer = document.getElementById('toDoContainer');
// let inputField = document.getElementById('inputField');
// let clearButton = document.getElementById('clearButton');
// let deleteIcon = "🗑"


// addToDoButton.addEventListener('click', function () {
//     var paragraph = document.createElement('p')

//     paragraph.classList.add('paragraph-styling');
//     paragraph.innerText = inputField.value + deleteIcon;

//     toDoContainer.appendChild(paragraph);
//     inputField.value = ("");
//     paragraph.addEventListener('click', function () {
//         paragraph.style.textDecoration = "line-through";
//         paragraph.style.color = "red";


//     })
//     paragraph.addEventListener('dblclick', function () {
//         toDoContainer.removeChild(paragraph);


//     })
//     clearButton.addEventListener('click', function () {
//         paragraph.innerText = ""
//     })

// })

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let clearButton = document.getElementById('clearButton');
let deleteIcon = "🗑️";

// Add this event listener outside to prevent multiple bindings
clearButton.addEventListener('click', function () {
    // Clear all items
    toDoContainer.innerHTML = "";
});

addToDoButton.addEventListener('click', function () {
    // Only add a to-do item if the input field is not empty
    if (inputField.value.trim() !== "") {
        // Create a div container for the to-do item
        var todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        // Create the text element
        var textElement = document.createElement('span');
        textElement.innerText = inputField.value;
        textElement.classList.add('todo-text');

        // Create the trash icon element
        var trashElement = document.createElement('span');
        trashElement.innerText = deleteIcon;
        trashElement.classList.add('trash-icon');

        // Add the text first, then the trash icon (for right alignment)
        todoItem.appendChild(textElement);
        todoItem.appendChild(trashElement);

        // Add the complete item to the container
        toDoContainer.appendChild(todoItem);
        inputField.value = "";

        // Add click handlers to the text part
        textElement.addEventListener('click', function () {
            textElement.style.textDecoration = "line-through";
            textElement.style.color = "red";
        });

        // Add double-click handler to remove the item
        todoItem.addEventListener('dblclick', function () {
            toDoContainer.removeChild(todoItem);
        });

        // Optional: Add click handler specifically to the trash icon
        trashElement.addEventListener('click', function (event) {
            toDoContainer.removeChild(todoItem);
            // Stop the event from bubbling up to prevent triggering the todoItem's events
            event.stopPropagation();
        });
    }
});