import { expenseCount, renderExpenses} from '../../src/controllers/expense-list-contoller.js';

document.addEventListener('DOMContentLoaded', () => {
  const  overviewBtn = document.querySelector('.js-overview-btn');
  const expensesBtn = document.querySelector('.js-expenses-btn');

  const dashboardView = document.querySelector('.js-dashboard-view"');
  const expenseFormView = document.querySelector('.js-expense-form-view');
  const allExpensesView = document.querySelector('.js-all-expenses-view');
  
  const expensesList = document.querySelector('.js-expenses-list');

  // render expense overview on page load
  expensesList.innerHTML = renderExpenses();

  overviewBtn.addEventListener('click', () => {
    console.log('overview clicked');
    const expensesMarkup = renderExpenses();
    console.log("ExpenseList(dashboard): ", expensesMarkup);
    expensesList.innerHTML = expensesMarkup;
  });

  expensesBtn.addEventListener('click', () => {
    showView(allExpensesView);
  });

  function showView(targetView) {
    hideAllViews();
    targetView.classList.remove('hidden');
  }
});