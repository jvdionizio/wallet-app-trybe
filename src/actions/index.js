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
  const expenseObj = {
    id: state.wallet.expenses.length,
    ...expense,
    exchangeRates: json,
  };
  return { type: 'ADD_EXPENSE', payload: expenseObj };
}

export function expenseAction(expense) {
  return (dispatch, getState) => (
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((result) => result.json())
      .then((json) => (dispatch(addExpense(json, expense, getState))))
  );
}
