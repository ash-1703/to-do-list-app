
# To-Do List Application

This is a simple, interactive To-Do List application built using HTML, CSS, and JavaScript. The app allows users to add, mark as complete, and delete tasks. It utilizes the browser's `localStorage` to save tasks, so they persist even after refreshing the page.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Setup and Installation](#setup-and-installation)
5. [How to Use](#how-to-use)
6. [Contributing](#contributing)
7. [License](#license)
8. [Acknowledgements](#acknowledgements)

## Features

- **Add Tasks:** Users can add new tasks using the input field and the "Add" button.
- **Mark Tasks as Completed:** Click on a task to toggle its completed state. Completed tasks are displayed with a strikethrough effect.
- **Delete Tasks:** Each task has a close (×) button that allows users to delete the task.
- **Persistent Data Storage:** The app uses `localStorage` to save and retrieve tasks, so they remain intact even after the browser is refreshed.

## Technologies Used

- **HTML5:** For the structure and layout of the app.
- **CSS3:** For styling the To-Do List app.
- **JavaScript (ES6):** For the app's interactivity and dynamic features.
- **Local Storage API:** For persisting tasks across browser sessions.

## Project Structure

```bash
.
├── index.html     # Main HTML file for the To-Do List app
├── style.css      # CSS file for styling the app
├── script.js      # JavaScript file for the app's functionality
├── images/        # Directory containing images for icons and checkmarks
│   ├── checked.png
│   └── unchecked.png
└── README.md      # Project README file
```

## Setup and Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- A code editor (e.g., Visual Studio Code, Sublime Text) for making changes (optional)

### Steps to Run the Application

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   ```
   
2. **Navigate to the Project Directory:**

   ```bash
   cd todo-list-app
   ```

3. **Open the `index.html` file in a web browser:**

   - Double-click the `index.html` file to open it in your default web browser.
   - Alternatively, right-click on the file and select "Open with" and choose your preferred browser.

That's it! You can now use the To-Do List app.

## How to Use

1. **Adding a Task:**
   - Type your task in the input box.
   - Click on the "Add" button.

2. **Marking a Task as Completed:**
   - Click on a task to mark it as completed. A completed task will have a strikethrough effect.

3. **Deleting a Task:**
   - Click on the close (`×`) button next to a task to delete it.

4. **Data Persistence:**
   - The tasks are stored in your browser's local storage, so they will remain intact even if you close or refresh the page.

## Contributing

Contributions are welcome! If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed explanation of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- https://www.youtube.com/watch?v=G0jO8kUrg-I&t=320s&ab_channel=GreatStack
- Background colors and design inspiration from [colorhunt.co](https://colorhunt.co/).
