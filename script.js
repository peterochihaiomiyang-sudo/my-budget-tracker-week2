
"use strict";

// 1. Store the monthly budget
const monthlyBudget = 50000;

// 2. Store expenses in an array
const expenses = [
    { name: "Groceries", category: "Food", amount: 2500 },
    { name: "Market food", category: "Food", amount: 4000 },
    { name: "Bus fare", category: "Transport", amount: 800 },
    { name: "Matatu fare", category: "Transport", amount: 1600 },
    { name: "Monthly rent", category: "Rent", amount: 5000 },
    { name: "Movie ticket", category: "Entertainment", amount: 1200 },
    { name: "Savings deposit", category: "Savings", amount: 2000 },
    { name: "Electricity", category: "Utilities", amount: 1350 }
];

// 3. Find the webpage elements
const budgetDisplay = document.getElementById("monthly-budget");
const spentDisplay = document.getElementById("total-spent");
const balanceDisplay = document.getElementById("remaining-balance");
const categoryGrid = document.getElementById("category-grid");
const transactionList = document.getElementById("transaction-list");
const expenseForm = document.getElementById("expense-form");
const expenseName = document.getElementById("expense-name");
const expenseCategory = document.getElementById("expense-category");
const expenseAmount = document.getElementById("expense-amount");
const budgetMessage = document.getElementById("budget-message");

// 4. Format amounts as Kenyan shillings
function formatCurrency(amount) {
    return "KSh " + amount.toLocaleString("en-KE", {
        maximumFractionDigits: 2
    });
}

// 5. Calculate total expenses using a loop
function calculateTotal() {
    let total = 0;

    for (const expense of expenses) {
        total += expense.amount;
    }

    return total;
}

// 6. Calculate the remaining budget
function calculateBalance(budget, total) {
    return budget - total;
}

// 7. Show a message based on the budget situation
function updateBudgetMessage(total, balance) {
    const percentage = (total / monthlyBudget) * 100;

    if (balance < 0) {
        budgetMessage.textContent =
            "Warning: You are over budget by " +
            formatCurrency(Math.abs(balance)) + ".";
    } else if (percentage >= 80) {
        budgetMessage.textContent =
            "Careful! You have used " + percentage.toFixed(1) +
            "% of your budget.";
    } else {
        budgetMessage.textContent =
            "Good job! You are within your budget.";
    }
}

// 8. Display expenses in the transaction table
function displayTransactions() {
    transactionList.replaceChildren();

    for (const expense of expenses) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = expense.name;

        const categoryCell = document.createElement("td");
        categoryCell.textContent = expense.category;

        const amountCell = document.createElement("td");
        amountCell.textContent = formatCurrency(expense.amount);

        row.append(nameCell, categoryCell, amountCell);
        transactionList.appendChild(row);
    }
}

// 9. Display totals for each category
function displayCategories() {
    const categoryTotals = {};

    for (const expense of expenses) {
        if (categoryTotals[expense.category] === undefined) {
            categoryTotals[expense.category] = 0;
        }

        categoryTotals[expense.category] += expense.amount;
    }

    categoryGrid.replaceChildren();

    for (const category in categoryTotals) {
        const card = document.createElement("article");
        card.className = "category-card";

        const heading = document.createElement("h3");
        heading.textContent = category;

        const amount = document.createElement("p");
        amount.textContent = formatCurrency(categoryTotals[category]);

        card.append(heading, amount);
        categoryGrid.appendChild(card);
    }
}

// 10. Update the dashboard on the webpage
function updateDashboard() {
    const total = calculateTotal();
    const balance = calculateBalance(monthlyBudget, total);

    budgetDisplay.textContent = formatCurrency(monthlyBudget);
    spentDisplay.textContent = formatCurrency(total);
    balanceDisplay.textContent = formatCurrency(balance);

    displayTransactions();
    displayCategories();
    updateBudgetMessage(total, balance);
}

// 11. Listen for the form submission
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = expenseName.value.trim();
    const category = expenseCategory.value;
    const amount = Number(expenseAmount.value);

    if (name === "" || category === "" ||
        !Number.isFinite(amount) || amount <= 0) {
        budgetMessage.textContent =
            "Please enter a name, choose a category, and enter an amount above zero.";
        return;
    }

    // Add the new expense to the array
    expenses.push({
        name: name,
        category: category,
        amount: amount
    });

    // Refresh the webpage information
    updateDashboard();

    // Clear the form for the next expense
    expenseForm.reset();
});

// 12. Display the initial dashboard
updateDashboard();
