import { expenseCount, renderExpenses} from '../../src/controllers/expense-list-contoller.js';

document.addEventListener('DOMContentLoaded', () => {
  const storedExpensesCount = expenseCount();
  console.log("Stored expenses number: ", storedExpensesCount);

  
  const  overviewBtn = document.querySelector('.js-overview-btn');
  const expensesList = document.querySelector('.js-expenses-list');

  // render expense overview on page load
  expensesList.innerHTML = renderExpenses();
  // initial render
  // renderExpenses();

  overviewBtn.addEventListener('click', () => {
    console.log('overview clicked');
    const expensesMarkup = renderExpenses();
    console.log("ExpenseList(dashboard): ", expensesMarkup);
    expensesList.innerHTML = expensesMarkup;
  });
});