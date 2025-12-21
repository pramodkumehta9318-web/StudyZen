// ---------- DOM ELEMENTS ----------
const titleInput = document.getElementById("expenseTitle");
const amountInput = document.getElementById("expenseAmount");
const categorySelect = document.getElementById("expenseCategory");
const addExpenseBtn = document.getElementById("addExpense");
const expenseList = document.getElementById("expenseList");
const totalExpenseText = document.getElementById("totalExpense");

// ---------- EVENT LISTENERS ----------
window.addEventListener("load", loadExpenses);

addExpenseBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const category = categorySelect.value;

    if (!title || isNaN(amount) || amount <= 0) {
        return alert("Enter valid expense!");
    }

    const expense = { title, amount, category };
    saveExpense(expense);
    displayExpense(expense);
    updateTotal();
    updateChart();

    titleInput.value = "";
    amountInput.value = "";
});

// ---------- FUNCTIONS ----------

// Save to LocalStorage
function saveExpense(expense) {
    let expenses = JSON.parse(localStorage.getItem("studyzen-expenses")) || [];
    expenses.push(expense);
    localStorage.setItem("studyzen-expenses", JSON.stringify(expenses));
}

// Load Expenses
function loadExpenses() {
    const expenses = JSON.parse(localStorage.getItem("studyzen-expenses")) || [];
    expenses.forEach(displayExpense);
    updateTotal();
    updateChart();
}

// Display Expense in List
function displayExpense(expense) {
    const li = document.createElement("li");
    li.style.marginBottom = "10px";
    li.innerHTML = `
        <strong>${expense.title}</strong> - ₹${expense.amount}<br>
        <small>Category: ${expense.category}</small><br>
        <button class="deleteBtn">❌ Delete</button>
    `;

    li.querySelector(".deleteBtn").addEventListener("click", () => {
        li.remove();
        deleteExpense(expense);
        updateTotal();
        updateChart();
    });

    expenseList.appendChild(li);
}

// Delete Expense
function deleteExpense(expenseToDelete) {
    let expenses = JSON.parse(localStorage.getItem("studyzen-expenses")) || [];
    expenses = expenses.filter(e => !(e.title === expenseToDelete.title && e.amount === expenseToDelete.amount && e.category === expenseToDelete.category));
    localStorage.setItem("studyzen-expenses", JSON.stringify(expenses));
}

// Update Total Expense
function updateTotal() {
    const expenses = JSON.parse(localStorage.getItem("studyzen-expenses")) || [];
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    totalExpenseText.innerText = `Total: ₹${total}`;
}

// ---------- CATEGORY-WISE CHART ----------
function updateChart() {
    const expenses = JSON.parse(localStorage.getItem("studyzen-expenses")) || [];
    const categoryTotals = {};

    expenses.forEach(e => {
        if (!categoryTotals[e.category]) categoryTotals[e.category] = 0;
        categoryTotals[e.category] += e.amount;
    });

    const labels = Object.keys(categoryTotals);
    const data = Object.values(categoryTotals);

    // Destroy previous chart if exists
    if (window.expChart) window.expChart.destroy();

    const ctx = document.getElementById("expenseChart").getContext("2d");
    window.expChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: ['#FF6384','#36A2EB','#FFCE56','#4BC0C0']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ₹${context.parsed}`;
                        }
                    }
                }
            }
        }
    });
}
