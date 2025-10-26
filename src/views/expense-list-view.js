export function renderExpenseList(expense_list) {
  let expensesHTML = ``;

  expense_list.forEach(expense_item => {
    expensesHTML += `
      <div class="expense-item">
        <span>${expense_item.name}</span>
        <span>${expense_item.amount}</span>
      </div>
    `
  });
  return expensesHTML;
}