// Exercise 1: Interactive Counter
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset-counter');

let count = 0;

function updateCounter() {
    counter.textContent = count;
}

incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCounter();
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

// Exercise 2: To-Do List
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

function addTodo() {
    const task = todoInput.value.trim();
    if (task) {
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between p-2 bg-white rounded-md shadow-sm';

        const taskText = document.createElement('span');
        taskText.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-colors';

        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        todoInput.value = '';
    }
}

addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Exercise 3: Form Validation
const form = document.getElementById('validation-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const successMessage = document.getElementById('success-message');

function showError(element, message) {
    element.textContent = message;
    element.classList.remove('hidden');
}

function hideError(element) {
    element.textContent = '';
    element.classList.add('hidden');
}

function validateEmail(email) {
    return email.includes('@');
}

function validatePassword(password) {
    return password.length >= 8;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Reset error messages
    hideError(nameError);
    hideError(emailError);
    hideError(passwordError);
    successMessage.classList.add('hidden');

    // Validate name
    if (!nameInput.value.trim()) {
        showError(nameError, 'Name is required');
        isValid = false;
    }

    // Validate email
    if (!validateEmail(emailInput.value)) {
        showError(emailError, 'Please enter a valid email address');
        isValid = false;
    }

    // Validate password
    if (!validatePassword(passwordInput.value)) {
        showError(passwordError, 'Password must be at least 8 characters long');
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = 'Form submitted successfully!';
        successMessage.classList.remove('hidden');
        form.reset();
    }
});

// Exercise 4: Color Picker
const colorPicker = document.getElementById('color-picker');
const applyColorBtn = document.getElementById('apply-color');
const colorBox = document.getElementById('color-box');

function applyColor() {
    colorBox.style.backgroundColor = colorPicker.value;
}

applyColorBtn.addEventListener('click', applyColor);
colorPicker.addEventListener('input', applyColor);

// Apply initial color
applyColor();