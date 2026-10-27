
# SpendWise – Interactive Personal Budget Tracker

## Project Overview

SpendWise is a personal budget tracker built with HTML, CSS, and JavaScript. It helps users view their monthly budget, track expenses, see spending by category, and monitor their remaining balance.

This project was improved to make the dashboard interactive. Users can add expenses through a form and see the dashboard update immediately.

## Features

- Displays the monthly budget, total expenses, and remaining balance.
- Shows expense totals for different categories.
- Displays a list of expense transactions.
- Allows users to add new expenses using a form.
- Updates totals, categories, and transactions automatically.
- Displays feedback when the budget is nearly used or exceeded.
- Validates expense information before adding it.

## JavaScript Concepts Implemented

### 1. Variables and Data

Variables store the monthly budget and connect the JavaScript code to elements on the webpage.

### 2. Arrays

An array stores multiple expense records. Each record contains an expense name, category, and amount. New expenses are added to the array when the user submits the form.

### 3. Loops

`for...of` loops process expense records to calculate total spending, display transactions, and calculate category totals. A `for...in` loop displays the category summaries.

### 4. Conditionals

`if`, `else if`, and `else` statements validate user input and display budget feedback. The dashboard warns users when they exceed their budget or use at least 80% of it.

### 5. Functions

Reusable functions format currency, calculate totals and balances, display transactions, update category summaries, and refresh the dashboard.

### 6. DOM Manipulation

JavaScript uses DOM methods such as `getElementById()`, `createElement()`, and `textContent` to update the webpage without requiring a manual refresh.

### 7. Event Listeners

A `submit` event listener handles the expense form. It prevents the default page reload, validates the information, adds the expense to the array, and refreshes the dashboard.

## Challenges and Solutions

- **Keeping totals accurate:** Calculations are performed from the expense array so the displayed total and balance stay consistent.
- **Updating several sections:** A dashboard update function refreshes the summary cards, category totals, transaction table, and budget message.
- **Validating user input:** The form checks that the expense name and category are provided and that the amount is a valid positive number.
- **Providing budget feedback:** Conditional statements display different messages depending on the remaining balance and percentage spent.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Project Files

- `index.html` – Dashboard structure and expense form.
- `style.css` – Dashboard styling and layout.
- `script.js` – Expense data, calculations, validation, and interactive updates.
- `README.md` – Project documentation.

## Testing

The application was tested by adding a new expense through the form. Adding a KSh 500 lunch expense increased total spending from KSh 18,450 to KSh 18,950, reduced the remaining balance from KSh 31,550 to KSh 31,050, and increased the Food category total from KSh 6,500 to KSh 7,000.

The new expense also appeared in the transaction table.

## Live Website

https://peterochihaiomiyang-sudo.github.io/my-budget-tracker-week2/

## GitHub Repository

https://github.com/peterochihaiomiyang-sudo/my-budget-tracker-week2

## Author

Peter Ochihai Omiyang
