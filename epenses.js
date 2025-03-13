// starting expenses as an empty array

let expenses = [];

// function that will hold the add expenses , will take the value from the field. user input value

function addExpense() {
  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;

  //it will ensure if all the field are filled before adding an axpense
  if (description && amount) {
    //this will increase the Id based on array length
    // after will push a new inputted expense to the array, will use parsefloat to return a number
    //and a new expense will be update using renderExenses

    const id = expenses.length + 1;
    expenses.push({ id, description, amount: parseFloat(amount) });

    renderExpenses();

    // after rendering expenses, th field for input will be cleared

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
  }
}

// function that will show all expenses in the table by using renderExpenses
// the function will get the table body "expenseList" and clear it first

function renderExpenses() {
  const list = document.getElementById("expenseList");
  list.innerHTML = "";

  // look into the expense array and create a table rows

  expenses.forEach((expense) => {
    // Create a new table row
    const row = document.createElement("tr");

    // input the row with expense data needed with also abutton to delete using an Id
    row.innerHTML = `
        <td>${expense.description}</td>
        <td>${expense.amount.toFixed(2)}</td>
        
        <td><button onclick="deleteExpense(${expense.id})">Delete</button></td>
    `;
    // Append the row to the table
    list.appendChild(row);
  });
}
