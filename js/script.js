// Main JavaScript file for the WebDevBasics project

// Wait for the DOM to be fully loaded before running code
document.addEventListener('DOMContentLoaded', function() {

    // JS Basics Page - Run Code Examples
    setupJavaScriptExamples();

    // Project Page - To-Do List Demo
    setupToDoListDemo();

    // DOM Manipulation Example
    setupDOMManipulationDemo();
});

// Function to set up JavaScript examples on the js-basics.html page
function setupJavaScriptExamples() {
    // Variables Example
    const tryVariablesBtn = document.getElementById('try-variables');
    const variablesOutput = document.getElementById('variables-output');

    if (tryVariablesBtn && variablesOutput) {
        tryVariablesBtn.addEventListener('click', function() {
            variablesOutput.innerHTML = '';
            variablesOutput.classList.remove('hidden');

            // Run the variables example
            let name = "John";
            let age = 25;
            let isStudent = true;
            const PI = 3.14159;

            variablesOutput.innerHTML += `let name = "${name}"<br>`;
            variablesOutput.innerHTML += `let age = ${age}<br>`;
            variablesOutput.innerHTML += `let isStudent = ${isStudent}<br>`;
            variablesOutput.innerHTML += `const PI = ${PI}<br>`;
        });
    }

    // Data Types Example
    const tryDatatypesBtn = document.getElementById('try-datatypes');
    const datatypesOutput = document.getElementById('datatypes-output');

    if (tryDatatypesBtn && datatypesOutput) {
        tryDatatypesBtn.addEventListener('click', function() {
            datatypesOutput.innerHTML = '';
            datatypesOutput.classList.remove('hidden');

            // Run the data types example
            let greeting = "Hello, World!";
            let count = 42;
            let price = 19.99;
            let isAvailable = true;
            let colors = ["red", "green", "blue"];
            let person = {
                firstName: "Jane",
                lastName: "Doe",
                age: 30
            };

            datatypesOutput.innerHTML += `greeting (string): "${greeting}"<br>`;
            datatypesOutput.innerHTML += `count (number): ${count}<br>`;
            datatypesOutput.innerHTML += `price (number): ${price}<br>`;
            datatypesOutput.innerHTML += `isAvailable (boolean): ${isAvailable}<br>`;
            datatypesOutput.innerHTML += `colors (array): [${colors}]<br>`;
            datatypesOutput.innerHTML += `person (object): {firstName: "${person.firstName}", lastName: "${person.lastName}", age: ${person.age}}<br>`;
        });
    }

    // Functions Example
    const tryFunctionsBtn = document.getElementById('try-functions');
    const functionsOutput = document.getElementById('functions-output');

    if (tryFunctionsBtn && functionsOutput) {
        tryFunctionsBtn.addEventListener('click', function() {
            functionsOutput.innerHTML = '';
            functionsOutput.classList.remove('hidden');

            // Function declaration
            function greet(name) {
                return "Hello, " + name + "!";
            }

            // Arrow function
            const add = (a, b) => {
                return a + b;
            };

            // Function expression
            const multiply = function(x, y) {
                return x * y;
            };

            functionsOutput.innerHTML += `greet("Alice"): ${greet("Alice")}<br>`;
            functionsOutput.innerHTML += `add(5, 3): ${add(5, 3)}<br>`;
            functionsOutput.innerHTML += `multiply(4, 6): ${multiply(4, 6)}<br>`;
        });
    }

    // Control Flow Example
    const tryControlBtn = document.getElementById('try-control');
    const controlOutput = document.getElementById('control-output');

    if (tryControlBtn && controlOutput) {
        tryControlBtn.addEventListener('click', function() {
            controlOutput.innerHTML = '';
            controlOutput.classList.remove('hidden');

            // If statements
            let temperature = 22;

            if (temperature > 30) {
                controlOutput.innerHTML += "It's hot outside!<br>";
            } else if (temperature > 20) {
                controlOutput.innerHTML += "It's a nice day!<br>";
            } else {
                controlOutput.innerHTML += "It's cold outside!<br>";
            }

            // For loop
            controlOutput.innerHTML += "<br>For loop:<br>";
            for (let i = 0; i < 3; i++) {
                controlOutput.innerHTML += `Loop iteration: ${i}<br>`;
            }

            // While loop
            controlOutput.innerHTML += "<br>While loop:<br>";
            let count = 0;
            while (count < 3) {
                controlOutput.innerHTML += `While count: ${count}<br>`;
                count++;
            }
        });
    }
}

// Function to set up the DOM manipulation demo on the js-basics.html page
function setupDOMManipulationDemo() {
    const changeTextBtn = document.getElementById('change-text');
    const changeColorBtn = document.getElementById('change-color');
    const addElementBtn = document.getElementById('add-element');
    const resetDemoBtn = document.getElementById('reset-demo');

    const demoHeading = document.getElementById('demo-heading');
    const demoParagraph = document.getElementById('demo-paragraph');
    const demoContainer = document.getElementById('demo-container');

    if (changeTextBtn && demoHeading && demoParagraph) {
        // Change text button
        changeTextBtn.addEventListener('click', function() {
            demoHeading.textContent = "Text Changed with JavaScript!";
            demoParagraph.innerHTML = "This paragraph was <strong>modified</strong> using JavaScript's innerHTML property.";
        });

        // Change color button
        if (changeColorBtn) {
            changeColorBtn.addEventListener('click', function() {
                demoHeading.style.color = getRandomColor();
                demoParagraph.style.backgroundColor = getRandomColor(0.2);
            });
        }

        // Add element button
        if (addElementBtn && demoContainer) {
            addElementBtn.addEventListener('click', function() {
                const newElement = document.createElement('div');
                newElement.textContent = "I was created with JavaScript!";
                newElement.className = "mt-2 p-2 bg-green-100 rounded";
                demoContainer.appendChild(newElement);
            });
        }

        // Reset demo button
        if (resetDemoBtn && demoContainer) {
            resetDemoBtn.addEventListener('click', function() {
                demoHeading.textContent = "This heading will change";
                demoHeading.style.color = "";
                demoParagraph.innerHTML = "This paragraph can be modified with JavaScript.";
                demoParagraph.style.backgroundColor = "";
                demoContainer.innerHTML = "";
            });
        }
    }
}

// Function to set up the to-do list demo on the project.html page
function setupToDoListDemo() {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const emptyMessage = document.getElementById('empty-message');

    if (taskInput && addTaskButton && taskList && emptyMessage) {
        // Function to add a new task
        function addTask() {
            // Get the task text from the input
            const taskText = taskInput.value.trim();

            // Only add task if the input is not empty
            if (taskText !== '') {
                // Create a new list item
                const taskItem = document.createElement('li');
                taskItem.className = 'flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200';

                // Create task container with checkbox and text
                const taskContainer = document.createElement('div');
                taskContainer.className = 'flex items-center';

                // Create checkbox
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'mr-3';
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        taskTextSpan.classList.add('line-through', 'text-gray-400');
                    } else {
                        taskTextSpan.classList.remove('line-through', 'text-gray-400');
                    }
                });

                // Create task text
                const taskTextSpan = document.createElement('span');
                taskTextSpan.textContent = taskText;

                // Create delete button
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.className = 'text-red-500 hover:text-red-700';
                deleteButton.addEventListener('click', function() {
                    taskList.removeChild(taskItem);

                    // Show empty message if no tasks remain
                    if (taskList.children.length === 0) {
                        emptyMessage.style.display = 'block';
                    }
                });

                // Add elements to task container
                taskContainer.appendChild(checkbox);
                taskContainer.appendChild(taskTextSpan);

                // Add elements to task item
                taskItem.appendChild(taskContainer);
                taskItem.appendChild(deleteButton);

                // Add task item to list
                taskList.appendChild(taskItem);

                // Hide the empty message
                emptyMessage.style.display = 'none';

                // Clear the input
                taskInput.value = '';

                // Focus the input for the next task
                taskInput.focus();
            }
        }

        // Add event listeners
        addTaskButton.addEventListener('click', addTask);

        // Allow pressing Enter to add a task
        taskInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });
    }
}

// Helper function to generate random colors
function getRandomColor(alpha = 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}