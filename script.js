
"use strict";

// 1. Store budgeting information in variables
let monthlyBudget = 50000;
let totalExpenses = 18450;
let remainingBalance = 0;

// 2. Function to calculate the remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// 3. Function to calculate the percentage spent
function calculateSpendingPercentage(budget, expenses) {
    if (budget <= 0) {
        return 0;
    }

    return (expenses / budget) * 100;
}

// 4. Collect budget information from the user
function collectBudgetInput() {
    const budgetInput = prompt(
        "Enter your monthly budget in KSh:",
        monthlyBudget
    );

    if (budgetInput === null || budgetInput.trim() === "") {
        console.log("Input cancelled or left blank. Using the sample budget.");
        return;
    }

    const enteredBudget = Number(budgetInput);

    if (!Number.isFinite(enteredBudget) || enteredBudget <= 0) {
        console.log("Please enter a valid budget greater than zero.");
        return;
    }

    const expensesInput = prompt(
        "Enter your total expenses in KSh:",
        totalExpenses
    );

    if (expensesInput === null || expensesInput.trim() === "") {
        console.log("Input cancelled or left blank. Using sample expenses.");
        return;
    }

    const enteredExpenses = Number(expensesInput);

    if (!Number.isFinite(enteredExpenses) || enteredExpenses < 0) {
        console.log("Please enter valid expenses of zero or more.");
        return;
    }

    monthlyBudget = enteredBudget;
    totalExpenses = enteredExpenses;

    displayBudgetResults();
}

// 5. Display clearly labelled results in the browser console
function displayBudgetResults() {
    remainingBalance = calculateBalance(monthlyBudget, totalExpenses);

    const spendingPercentage = calculateSpendingPercentage(
        monthlyBudget,
        totalExpenses
    );

    console.log("===== SpendWise Budget Report =====");
    console.log("Monthly Budget: KSh " + monthlyBudget.toLocaleString("en-KE"));
    console.log("Total Expenses: KSh " + totalExpenses.toLocaleString("en-KE"));
    console.log("Remaining Balance: KSh " + remainingBalance.toLocaleString("en-KE"));
    console.log("Percentage Spent: " + spendingPercentage.toFixed(1) + "%");
    console.log("===================================");
}

// 6. Run the budgeting application
console.log("Welcome to SpendWise!");
collectBudgetInput();
