/* eslint-disable react/jsx-max-depth */
import { PencilSimpleLine, X } from 'phosphor-react';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { expenseExclude, expenseEdit } from '../actions';
import Icon from './styles/Icon';
import IconBtn from './styles/IconBtn';

class ExpensesTable extends React.Component {
  render() {
    const { expenses, removeExpense, editExpense } = this.props;
    return (
      <div
        className="
          w-11/12
          overflow-x-auto
          mx-auto
          mt-4
          bg-gray-100
          rounded
          p-4
          shadow-lg
        "
      >
        <table
          className="
            w-full
          "
        >
          <thead
            className="
              text-gray-800
              text-sm
              leading-normal
            "
          >
            <tr
              className="
                text-left
                text-sm
                font-medium
              "
            >
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
          <tbody
            className="
              text-gray-800
              text-sm
            "
          >
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
                <tr
                  key={ id }
                  className="
                    border-b
                    border-gray-100
                    border-solid
                    border-8
                  "
                >
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{valueToFixed}</td>
                  <td>{exchangeRates[currency].name}</td>
                  <td>{askToFixed}</td>
                  <td>{exchangedValue}</td>
                  <td>Real</td>
                  <td>
                    <IconBtn edit>
                      <button
                        type="button"
                        data-testid="edit-btn"
                        onClick={ () => editExpense(expense) }
                      >
                        <Icon>
                          <PencilSimpleLine />
                        </Icon>
                      </button>
                    </IconBtn>
                    <IconBtn remove>
                      <button
                        type="button"
                        data-testid="delete-btn"
                        onClick={ () => removeExpense(id) }
                      >
                        <Icon>
                          <X />
                        </Icon>
                      </button>
                    </IconBtn>
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
  editExpense: (expense) => dispatch(expenseEdit(expense)),
});

const mapStateToProps = (store) => ({
  expenses: store.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
