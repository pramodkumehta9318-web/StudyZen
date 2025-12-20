// 📝 SMART TODO LOGIC

const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("priority");
const dueDateInput = document.getElementById("dueDate");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Load tasks on page load
window.addEventListener("load", loadTasks);

// Add task
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;
    const dueDate = dueDateInput.value;

    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    const task = {
        text: taskText,
        priority: priority,
        dueDate: dueDate,
        completed: false
    };

    saveTask(task);
    displayTask(task);

    taskInput.value = "";
    dueDateInput.value = "";
});

// Save task to LocalStorage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("studyzen-tasks")) || [];
    tasks.push(task);
    localStorage.setItem("studyzen-tasks", JSON.stringify(tasks));
}

// Load tasks from LocalStorage
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("studyzen-tasks")) || [];
    tasks.forEach(task => displayTask(task));
}

// Display task on screen
function displayTask(task) {
    const li = document.createElement("li");
    li.style.marginBottom = "10px";

    // Priority color
    let color = "white";
    if (task.priority === "High") color = "#ff4d4d";
    if (task.priority === "Medium") color = "#ffd000";
    if (task.priority === "Low") color = "#4dff88";

    li.innerHTML = `
        <span style="color:${color}; font-weight:600;">
            ${task.text}
        </span>
        <br>
        <small>Priority: ${task.priority}</small>
        ${task.dueDate ? `<br><small>Due: ${task.dueDate}</small>` : ""}
        <br>
        <button class="doneBtn">✔</button>
        <button class="deleteBtn">❌</button>
    `;

    // Completed task
    if (task.completed) {
        li.style.textDecoration = "line-through";
        li.style.opacity = "0.6";
    }

    // Done button
    li.querySelector(".doneBtn").addEventListener("click", () => {
        task.completed = !task.completed;
        updateTasks();
        li.style.textDecoration = task.completed ? "line-through" : "none";
        li.style.opacity = task.completed ? "0.6" : "1";
    });

    // Delete button
    li.querySelector(".deleteBtn").addEventListener("click", () => {
        li.remove();
        deleteTask(task);
    });

    // Overdue check
    if (task.dueDate) {
        const today = new Date().toISOString().split("T")[0];
        if (task.dueDate < today && !task.completed) {
            li.style.borderLeft = "5px solid red";
        }
    }

    taskList.appendChild(li);
}

// Update LocalStorage (for completed toggle)
function updateTasks() {
    let tasks = JSON.parse(localStorage.getItem("studyzen-tasks")) || [];
    localStorage.setItem("studyzen-tasks", JSON.stringify(tasks));
}

// Delete task from LocalStorage
function deleteTask(taskToDelete) {
    let tasks = JSON.parse(localStorage.getItem("studyzen-tasks")) || [];
    tasks = tasks.filter(
        t => !(t.text === taskToDelete.text && t.dueDate === taskToDelete.dueDate)
    );
    localStorage.setItem("studyzen-tasks", JSON.stringify(tasks));
}
