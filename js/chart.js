// ---------- CATEGORY-WISE DOUGHNUT CHART ----------

function updateChart() {
    // Get expenses from LocalStorage
    const expenses = JSON.parse(localStorage.getItem("studyzen-expenses")) || [];

    // Calculate totals per category
    const categoryTotals = {};
    expenses.forEach(e => {
        if (!categoryTotals[e.category]) categoryTotals[e.category] = 0;
        categoryTotals[e.category] += e.amount;
    });

    // Labels & Data
    const labels = Object.keys(categoryTotals);
    const data = Object.values(categoryTotals);

    // Destroy existing chart if exists
    if (window.expChart) window.expChart.destroy();

    // Get canvas context
    const ctx = document.getElementById("expenseChart").getContext("2d");

    // Create doughnut chart
    window.expChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    '#FF6384', // Food
                    '#36A2EB', // Travel
                    '#FFCE56', // Recharge
                    '#4BC0C0'  // Other
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                },
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

// Call updateChart() whenever expenses are added or deleted
// Example in your expense.js:

// After adding a new expense:
displayExpense(expense);
updateChart();

// After deleting an expense:
deleteExpense(expense);
updateChart();

// On page load:
loadExpenses();
updateChart();
