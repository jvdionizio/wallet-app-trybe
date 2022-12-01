// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  currentExpense: {
    id: 0,
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  },
  edit: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_CURRENCIES':
    return {
      ...state,
      currencies: action.currencies,
    };
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case 'EDIT_CURRENT_EXPENSE':
    return {
      ...state,
      currentExpense: {
        ...state.currentExpense,
        [action.key]: action.value,
      },
    };
  case 'EDIT_EXPENSE':
    return {
      ...state,
      currentExpense: action.payload,
      edit: true,
    };
  case 'EDIT_EXPENSE_ACTION':
    return {
      ...state,
      expenses: state.expenses.map((expense) => (
        expense.id !== action.payload.id
          ? expense
          : { ...action.payload, exchangeRates: expense.exchangeRates })),
      edit: false,
    };
  case 'REMOVE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  case 'CLEAR_BOARD':
    return {
      ...state,
      expenses: [],
    };
  default:
    return state;
  }
};

export default wallet;
