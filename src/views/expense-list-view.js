export function renderExpenseList(expense_list) {
  let expensesHTML = ``;

  expense_list.forEach(expense_item => {
    expensesHTML += `
      <div class="expense-item">
        <span>${expense_item.name}</span>
        <span>${expense_item.amount}</span>
        <span>${expense_item.category}</span>
        <span>${expense_item.date}</span>
      </div>
    `
  });
  console.log("ExpenseHTML markup(view): ", expensesHTML);
  return expensesHTML;
}