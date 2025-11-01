import { getExpenses } from '../models/expense-list-model.js';
import { renderExpenseList } from '../views/expense-list-view.js';

export function renderExpenses(expenseCount=0) {
  const expenses = getExpenses();
  return renderExpenseList(expenses);
}
