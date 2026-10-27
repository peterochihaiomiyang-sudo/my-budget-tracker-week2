# SpendWise – Budget Tracker

## About the Project

SpendWise is a responsive budget dashboard designed to help users understand their monthly budget, expenses, and remaining balance.

This project builds on the HTML and CSS dashboard by introducing JavaScript fundamentals, including variables, data types, user input, calculations, and reusable functions.

All financial figures are sample data for learning purposes.

## Project Files

- `index.html` – Provides the structure of the SpendWise dashboard.
- `style.css` – Styles the dashboard and makes it responsive.
- `script.js` – Collects budget information, performs calculations, and displays results in the browser console.
- `README.md` – Documents the project and explains how it works.

## Features

- Displays a budget dashboard with expense categories and recent transactions.
- Collects monthly budget and total expenses using JavaScript input prompts.
- Validates user input to ensure the values are valid numbers.
- Calculates the remaining balance.
- Calculates the percentage of the budget spent.
- Displays clearly labelled results in the browser console.
- Includes reusable functions for budget calculations.
- Provides a responsive interface using CSS Grid and Flexbox.

## JavaScript Concepts Implemented

### 1. Variables and Data Types

The application uses variables to store budgeting information:

- `monthlyBudget` stores the monthly budget.
- `totalExpenses` stores total expenses.
- `remainingBalance` stores the amount remaining after expenses.
- `spendingPercentage` stores the calculated percentage spent.

The code uses `let` for values that can change and `const` for values that do not need reassignment.

### 2. User Input

The `prompt()` function collects the monthly budget and total expenses from the user.

The `Number()` function converts the entered values into numbers. The program checks the input and rejects invalid budget values and negative expenses.

### 3. Budget Calculations

The remaining balance is calculated by subtracting total expenses from the monthly budget:

`Remaining Balance = Monthly Budget - Total Expenses`

The percentage spent is calculated using:

`Percentage Spent = (Total Expenses / Monthly Budget) × 100`

For example, with a monthly budget of KSh 50,000 and expenses of KSh 18,450, the remaining balance is KSh 31,550 and the percentage spent is 36.9%.

### 4. Reusable Functions

The application uses functions to organize its logic:

- `calculateBalance()` calculates the remaining balance.
- `calculateSpendingPercentage()` calculates the percentage spent.
- `collectBudgetInput()` collects and validates user input.
- `displayBudgetResults()` calculates and displays the budget report.

Functions make the code easier to read, maintain, test, and reuse.

### 5. Console Output

The application uses `console.log()` to display a clearly labelled budget report in the browser developer console.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- CSS Grid and Flexbox
- Git and GitHub
- GitHub Pages

## How to Run the Project

1. Open the live website: https://peterochihaiomiyang-sudo.github.io/my-budget-tracker-week2/
2. Enter your monthly budget when prompted.
3. Enter your total expenses when prompted.
4. Open the browser developer tools using F12.
5. Select the Console tab to view the budget report.

## Testing

Test the application using a monthly budget of `50000` and total expenses of `18450`.

Expected results:

- Monthly Budget: KSh 50,000
- Total Expenses: KSh 18,450
- Remaining Balance: KSh 31,550
- Percentage Spent: 36.9%

Also test invalid inputs, blank inputs, and cancelled prompts.

## Live Website

https://peterochihaiomiyang-sudo.github.io/my-budget-tracker-week2/

## Repository

https://github.com/peterochihaiomiyang-sudo/my-budget-tracker-week2

## Author

Peter Ochihai Omiyang

PLP Software Engineering Training – JavaScript Foundation Assignment
