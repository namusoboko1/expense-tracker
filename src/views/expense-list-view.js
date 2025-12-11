export function renderExpenseList(expense_list) {
  let expensesHTML = ``;

  expense_list.forEach(expense_item => {
    expensesHTML += `
      <tr class="expense-item">
        <td>${expense_item.name}</td>
        <td>${expense_item.category}</td>
        <td>${expense_item.date}</td>
        <td>${expense_item.amount}</td>
        <td> <button class="js-del-expense-btn del-expense-btn">Delete</button>
      </tr>
    `
  });
  console.log("ExpenseHTML markup(view): ", expensesHTML);
  return expensesHTML;
}