import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { expenseExclude } from '../actions';

class ExpensesTable extends React.Component {
  render() {
    const { expenses, removeExpense } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expenses.map((expense) => {
              const {
                id,
                value,
                description,
                currency,
                method,
                tag,
                exchangeRates,
              } = expense;
              const valueToFixed = parseFloat(value).toFixed(2);
              const askToFixed = parseFloat(exchangeRates[currency].ask).toFixed(2);
              const exchangedValue = (
                (parseFloat(value) * parseFloat(exchangeRates[currency].ask)).toFixed(2)
              );
              return (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{valueToFixed}</td>
                  <td>{exchangeRates[currency].name}</td>
                  <td>{askToFixed}</td>
                  <td>{exchangedValue}</td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => removeExpense(id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.array,
  expenseExclude: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id) => dispatch(expenseExclude(id)),
});

const mapStateToProps = (store) => ({
  expenses: store.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
