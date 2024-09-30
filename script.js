// Get references to the input box and list container elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

/**
 * Adds a new task to the To-Do list.
 * If the input box is empty, shows an alert to the user.
 * Otherwise, creates a new list item, appends it to the list,
 * and saves the updated list to local storage.
 */
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert("You must write something"); // Show alert if no task is entered
    } else {
        // Create a new list item (<li>) element and set its content
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // Set the inner HTML to the value in the input box
        listContainer.appendChild(li); // Append the new item to the list container

        // Create a close button (<span>) element for the list item
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode character '×' for the close button
        li.appendChild(span); // Append the close button to the list item
    }
    inputBox.value = ""; // Clear the input box after adding the task
    saveData(); // Save the updated list to local storage
}

/**
 * Handles click events on the list container.
 * If the clicked element is a list item, toggles the 'checked' class.
 * If the clicked element is the close button (span), removes the task.
 */
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") { // Check if the clicked element is a <li>
        e.target.classList.toggle("checked"); // Toggle 'checked' class to mark/unmark the task
        saveData(); // Save the updated state to local storage
    } else if (e.target.tagName === 'SPAN') { // Check if the clicked element is a <span>
        e.target.parentElement.remove(); // Remove the parent <li> element (task)
        saveData(); // Save the updated list to local storage
    }
}, false);

/**
 * Saves the current list of tasks to local storage.
 * This allows the tasks to persist even after refreshing the page.
 */
function saveData() {
    // Store the current HTML content of the list container in local storage
    localStorage.setItem("data", listContainer.innerHTML);
}

/**
 * Displays the saved tasks from local storage when the page loads.
 * If there are no saved tasks, localStorage.getItem("data") will be null.
 */
function showTask() {
    // Retrieve the stored HTML content of the list and set it in the list container
    listContainer.innerHTML = localStorage.getItem("data") || ""; // Fallback to an empty string if no data is found
}

// Call the showTask function to display the saved tasks on page load
showTask();
