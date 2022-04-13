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
