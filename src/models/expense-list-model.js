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

const expense_list = []; 

//return expenses to controller
export function getExpenses() {
  arr.forEach(expense => {
    expense_list.push({name: expense.name, amount: expense.amount});
  });
  return expense_list;
}