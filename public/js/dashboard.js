import { expenseCount, renderExpenses} from '../../src/controllers/expense-list-contoller.js';

document.addEventListener('DOMContentLoaded', () => {
  const storedExpensesCount = expenseCount();
  console.log("Stored expenses number: ", storedExpensesCount);

  if (storedExpensesCount) {
    renderExpenses(storedExpensesCount);
  }

  const  overviewBtn = document.querySelector('.js-overview-btn');
  const expensesList = document.querySelector('.js-expenses-list');

  // initial render
  // renderExpenses();

  overviewBtn.addEventListener('click', () => {
    console.log('overview clicked');
    const expensesMarkup = renderExpenses();
    expensesList.innerHTML = expensesMarkup;
  });
});