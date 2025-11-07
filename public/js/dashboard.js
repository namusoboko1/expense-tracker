import { expenseCount, renderExpenses} from '../../src/controllers/expense-list-contoller.js';

document.addEventListener('DOMContentLoaded', () => {
  const  overviewBtn = document.querySelector('.js-overview-btn');
  const expensesBtn = document.querySelector('.js-expenses-btn');
  const addExpenseBtn = document.querySelector('.js-new-expense-btn');
  const cancelBtn = document.querySelector('.js-cancel-btn');

  const dashboardView = document.querySelector('.js-dashboard-view');
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
    showView(dashboardView);
  });

  expensesBtn.addEventListener('click', () => {
    showView(allExpensesView);
  });

  addExpenseBtn.addEventListener('click', () => {
    showView(expenseFormView);
  })

  cancelBtn.addEventListener('click', () => {
    showView(dashboardView);
  });


  function showView(targetView) {
    hideAllViews();
    targetView.classList.remove('hidden');
  }

  function hideAllViews() {
    const views = [dashboardView, expenseFormView, allExpensesView];

    views.forEach(view => {
      view.classList.add('hidden');
    });
  }
});