
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let clearButton = document.getElementById('clearButton');
let deleteIcon = "🗑️";
document.getElementById('languageSelect').addEventListener('change', function () {
    changeLanguage(this.value);
});

function changeLanguage(lang) {
    const texts = {
        en: {
            title: "To Do List",
            placeholder: "Add a Task",
            addButton: "Add",
            clearButton: "Clear All",
            instruction1: "Click on a task to mark it as completed.",
            instruction2: "Click on the trash icon to delete a task."
        },
        ar: {
            title: "قائمة المهام",
            placeholder: "أضف مهمة",
            addButton: "أضف",
            clearButton: "مسح الكل",
            instruction1: "انقر على المهمة لتعليمها كمكتملة.",
            instruction2: "انقر على أيقونة المهملات لحذف المهمة."
        },
        he: {
            title: "רשימת משימות",
            placeholder: "הוסף משימה",
            addButton: "הוסף",
            clearButton: "נקה הכל",
            instruction1: "לחץ על משימה לסמן אותה כהושלמה.",
            instruction2: "לחץ על אייקון הפח למחוק משימה."
        }
    };

    document.querySelector('h1').innerText = texts[lang].title;
    document.getElementById('inputField').placeholder = texts[lang].placeholder;
    document.getElementById('addButtonText').innerText = texts[lang].addButton;
    document.getElementById('clearButton').innerText = texts[lang].clearButton;

    const instructionParagraphs = document.querySelectorAll('#instructions p');
    instructionParagraphs[0].innerText = texts[lang].instruction1;
    instructionParagraphs[1].innerText = texts[lang].instruction2;
}



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