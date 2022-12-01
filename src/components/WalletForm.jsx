/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-max-depth */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Check } from 'phosphor-react';
import { expenseAction, currentExpenseEdit, editExpenseAction } from '../actions';
import SelectRoot from './styles/SelectRoot';
import SelectSelect from './styles/SelectSelect';
import TextInputRoot from './styles/TextInputRoot';
import TextInputInput from './styles/TextInputInput';
import Button from './styles/Button';
import Icon from './styles/Icon';
import IconBtn from './styles/IconBtn';

class WalletForm extends React.Component {
  onInputChange = ({ target }) => {
    const { editCurrentExpense } = this.props;
    const { name, value } = target;
    console.log(name, value);
    editCurrentExpense(name, value);
  }

  handleClick = (edit) => {
    const {
      editCurrentExpense,
      addExpense,
      editExpense,
      currentExpense,
    } = this.props;
    if (edit) {
      editExpense(currentExpense);
    } else {
      addExpense(currentExpense);
    }
    editCurrentExpense('value', '');
    editCurrentExpense('description', '');
    editCurrentExpense('currency', 'USD');
    editCurrentExpense('method', 'Dinheiro');
    editCurrentExpense('tag', 'Alimentação');
  }

  render() {
    const { currencies, currentExpense, edit } = this.props;
    const { value, description, currency, method, tag } = currentExpense;
    const screenWidth = window.innerWidth;
    const SETECENTOS_E_SESSENTA_E_OITO = 768;
    const isMobile = screenWidth < SETECENTOS_E_SESSENTA_E_OITO;
    return (
      <div
        className="
          w-11/12
          bg-gray-100
          p-4
          shadow-lg
          rounded
          mx-auto
          mt-4
        "
      >
        <form
          className="
            flex
            flex-col
            md:flex-row
            md:justify-evenly
            gap-4
          "
        >
          <label htmlFor="valueInput">
            Valor:
            <TextInputRoot form>
              <TextInputInput
                id="value"
                name="value"
                data-testid="value-input"
                type="number"
                onChange={ this.onInputChange }
                value={ value }
              />
            </TextInputRoot>
          </label>
          <label htmlFor="currency">
            Moeda:
            <SelectRoot>
              <SelectSelect
                id="currency"
                name="currency"
                data-testid="currency-input"
                onChange={ this.onInputChange }
                value={ currency }
              >
                {currencies.map((curr) => (
                  <option
                    key={ curr }
                    value={ curr }
                  >
                    { curr }
                  </option>
                ))}
              </SelectSelect>
            </SelectRoot>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <SelectRoot>
              <SelectSelect
                id="method"
                name="method"
                data-testid="method-input"
                onChange={ this.onInputChange }
                value={ method }
              >
                <option
                  value="Dinheiro"
                >
                  Dinheiro
                </option>
                <option
                  value="Cartão de crédito"
                >
                  Cartão de crédito
                </option>
                <option
                  value="Cartão de débito"
                >
                  Cartão de débito
                </option>
              </SelectSelect>
            </SelectRoot>
          </label>
          <label
            htmlFor="tag"
          >
            Categoria:
            <SelectRoot>
              <SelectSelect
                id="tag"
                name="tag"
                data-testid="tag-input"
                onChange={ this.onInputChange }
                value={ tag }
              >
                <option
                  value="Alimentação"
                >
                  Alimentação
                </option>
                <option
                  value="Lazer"
                >
                  Lazer
                </option>
                <option
                  value="Trabalho"
                >
                  Trabalho
                </option>
                <option
                  value="Transporte"
                >
                  Transporte
                </option>
                <option
                  value="Saúde"
                >
                  Saúde
                </option>
              </SelectSelect>
            </SelectRoot>
          </label>
          <label htmlFor="description">
            Descrição:
            <TextInputRoot form>
              <TextInputInput
                id="description"
                name="description"
                data-testid="description-input"
                type="text"
                onChange={ this.onInputChange }
                value={ description }
                placeholder="Descreva com o que gastou"
              />
            </TextInputRoot>
          </label>
          {
            isMobile ? (
              <Button>
                <button
                  type="button"
                  onClick={ () => this.handleClick(edit) }
                >
                  {edit ? 'Editar despesa' : 'Adicionar despesa' }
                </button>
              </Button>
            ) : (
              <IconBtn check>
                <button
                  type="button"
                  onClick={ () => this.handleClick(edit) }
                  className="self-center"
                >
                  <Icon>
                    <Check />
                  </Icon>
                </button>
              </IconBtn>
            )
          }
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.array,
  currentExpense: PropTypes.object,
  editCurrentExpense: PropTypes.func,
  addExpense: PropTypes.func,
  edit: PropTypes.bool,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(expenseAction(expense)),
  editExpense: (expense) => dispatch(editExpenseAction(expense)),
  editCurrentExpense: (key, value) => dispatch(currentExpenseEdit(key, value)),
});

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
  currentExpense: store.wallet.currentExpense,
  edit: store.wallet.edit,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
