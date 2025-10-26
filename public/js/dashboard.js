import { renderExpenses} from '../../src/controllers/expense-list-contoller.js';

document.addEventListener('DOMContentLoaded', () => {
  const  overviewBtn = document.querySelector('.js-overview-btn');
  const expensesCards = document.querySelector('.js-expenses-cards');

  // initial render
  // renderExpenses();

  overviewBtn.addEventListener('click', () => {
    console.log('overview clicked');
    const expensesMarkup = renderExpenses();
    expensesCards.innerHTML = expensesMarkup;
  });
});