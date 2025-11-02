import { getExpenses, getStoredExpensesCount } from '../models/expense-list-model.js';
import { renderExpenseList } from '../views/expense-list-view.js';

export function renderExpenses(expenseCount=0) {
  console.log('renderExpnses called');
  const expenses = getExpenses(expenseCount);
  console.log("ExpenseList(controller): ", expenses);
  return renderExpenseList(expenses);
}

export function expenseCount() {
  return getStoredExpensesCount();
}