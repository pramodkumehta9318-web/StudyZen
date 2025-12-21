const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("studyzen-tasks")) || [];

addTask.onclick = () => {
    if (!taskInput.value) return;
    tasks.push({ text: taskInput.value, done: false });
    save();
    taskInput.value = "";
};

function save() {
    localStorage.setItem("studyzen-tasks", JSON.stringify(tasks));
    render();
}

function render() {
    taskList.innerHTML = "";
    tasks.forEach((t, i) => {
        const li = document.createElement("li");
        li.innerHTML = `${t.text} <button>✔</button> <button>❌</button>`;
        if (t.done) li.style.textDecoration = "line-through";

        li.children[0].onclick = () => {
            tasks[i].done = !tasks[i].done;
            save();
        };
        li.children[1].onclick = () => {
            tasks.splice(i, 1);
            save();
        };
        taskList.appendChild(li);
    });
}
render();
