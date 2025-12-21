const planInput = document.getElementById("planInput");
const addPlan = document.getElementById("addPlan");
const planList = document.getElementById("planList");
const progressBar = document.getElementById("progressBar");

let plans = JSON.parse(localStorage.getItem("studyzen-plans")) || [];

addPlan.addEventListener("click", () => {
    if (!planInput.value.trim()) return;

    plans.push({ text: planInput.value, done: false });
    save();
    planInput.value = "";
});

function save() {
    localStorage.setItem("studyzen-plans", JSON.stringify(plans));
    render();
}

function render() {
    planList.innerHTML = "";
    let doneCount = 0;

    plans.forEach((p, i) => {
        const li = document.createElement("li");
        li.innerHTML = `
        ${p.text}
        <button>✔</button>
        <button>❌</button>
        `;

        if (p.done) {
            li.style.textDecoration = "line-through";
            doneCount++;
        }

        li.children[0].onclick = () => {
            plans[i].done = !plans[i].done;
            localStorage.setItem("studyzen-last-study-date", new Date().toDateString());
            save();
        };

        li.children[1].onclick = () => {
            plans.splice(i, 1);
            save();
        };

        planList.appendChild(li);
    });

    const percent = plans.length ? Math.round(doneCount / plans.length * 100) : 0;
    progressBar.style.width = percent + "%";
    progressBar.innerText = percent + "%";
}

render();
