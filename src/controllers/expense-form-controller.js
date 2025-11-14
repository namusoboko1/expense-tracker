import { saveExpense } from '../models/expense-list-model.js';

export function handleAddExpense(expenseFormData) {
  saveExpense(expenseFormData);
}