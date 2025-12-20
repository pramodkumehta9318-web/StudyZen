// Study Planner Logic
const planInput = document.getElementById("planInput");
const addPlanBtn = document.getElementById("addPlan");
const planList = document.getElementById("planList");
const progressBar = document.getElementById("progressBar");

// Load plans on page load
window.addEventListener("load", loadPlans);

addPlanBtn.addEventListener("click", () => {
    const text = planInput.value.trim();
    if (!text) return alert("Plan cannot be empty!");
    const plan = { text, completed: false };
    savePlan(plan);
    displayPlan(plan);
    planInput.value = "";
    updateProgress();
});

function savePlan(plan) {
    let plans = JSON.parse(localStorage.getItem("studyzen-plans")) || [];
    plans.push(plan);
    localStorage.setItem("studyzen-plans", JSON.stringify(plans));
}

function loadPlans() {
    let plans = JSON.parse(localStorage.getItem("studyzen-plans")) || [];
    plans.forEach(displayPlan);
    updateProgress();
}

function displayPlan(plan) {
    const li = document.createElement("li");
    li.style.marginBottom = "10px";
    li.innerHTML = `
        <span>${plan.text}</span>
        <button class="doneBtn">✔</button>
        <button class="deleteBtn">❌</button>
    `;

    if (plan.completed) {
        li.style.textDecoration = "line-through";
        li.style.opacity = "0.6";
    }

    li.querySelector(".doneBtn").addEventListener("click", () => {
        plan.completed = !plan.completed;
        li.style.textDecoration = plan.completed ? "line-through" : "none";
        li.style.opacity = plan.completed ? "0.6" : "1";
        updateTasks();
        updateProgress();
    });

    li.querySelector(".deleteBtn").addEventListener("click", () => {
        li.remove();
        deletePlan(plan);
        updateProgress();
    });

    planList.appendChild(li);
}

function updateTasks() {
    let plans = JSON.parse(localStorage.getItem("studyzen-plans")) || [];
    localStorage.setItem("studyzen-plans", JSON.stringify(plans));
}

function deletePlan(planToDelete) {
    let plans = JSON.parse(localStorage.getItem("studyzen-plans")) || [];
    plans = plans.filter(p => p.text !== planToDelete.text);
    localStorage.setItem("studyzen-plans", JSON.stringify(plans));
}

function updateProgress() {
    const plans = JSON.parse(localStorage.getItem("studyzen-plans")) || [];
    if (!plans.length) {
        progressBar.style.width = "0%";
        progressBar.innerText = "0%";
        return;
    }
    const completed = plans.filter(p => p.completed).length;
    const percent = Math.round((completed / plans.length) * 100);
    progressBar.style.width = percent + "%";
    progressBar.innerText = percent + "%";
}
