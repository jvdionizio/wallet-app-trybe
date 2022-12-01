// Coloque aqui suas actions
export function emailAction(email) {
  return { type: 'ADD_EMAIL', email };
}

function getCurrencies(json) {
  const currencies = Object.keys(json).filter((key) => key !== 'USDT');
  return { type: 'ADD_CURRENCIES', currencies };
}

export function fetchCurrencies() {
  return (dispatch) => (
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => dispatch(getCurrencies(json)))
  );
}

function addExpense(json, expense, getState) {
  const state = getState();
  console.log(state.wallet.expenses.length);
  const expenseObj = {
    ...expense,
    id: state.wallet.expenses.length,
    exchangeRates: json,
  };
  console.log(expenseObj);
  return { type: 'ADD_EXPENSE', payload: expenseObj };
}

export function expenseAction(expense) {
  return (dispatch, getState) => (
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((result) => result.json())
      .then((json) => (dispatch(addExpense(json, expense, getState))))
  );
}

export function expenseExclude(id) {
  return { type: 'REMOVE_EXPENSE', id };
}

export function expenseEdit(expense) {
  return { type: 'EDIT_EXPENSE', payload: expense };
}

export function currentExpenseEdit(key, value) {
  return { type: 'EDIT_CURRENT_EXPENSE', key, value };
}

export function editExpenseAction(expense) {
  return {
    type: 'EDIT_EXPENSE_ACTION',
    payload: expense,
  };
}
