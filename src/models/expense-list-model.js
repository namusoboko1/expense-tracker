const arr = [
  { id: 1, 
    name: 'Hosting Website', 
    amount: 300, 
    category: 'Cloud', 
    date: new Date().getDate.toString() 
  }, { id: 2, 
    name: 'New Computer', 
    amount: 300, 
    category: 'Electronics', 
    date: new Date().getDate.toString() 
  }
];

//return expenses to controller
export function getExpenses(expenseCount=0) {
  // TODO:use expenseCount to limit results
  const expenseList = arr.map(expense => {
    return {
      name: expense.name,
      amount: expense.amount,
      category: expense.category,
      date: expense.date
    };
  });
  return expenseList;
}

export function getStoredExpensesCount() {
  return arr.length;
}