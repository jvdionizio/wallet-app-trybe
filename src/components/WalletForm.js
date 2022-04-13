import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class WalletForm extends React.Component {
  constructor() {
    super();

    this.state = {
      valueInput: 0,
      description: '',
      currencieInput: '',
      method: '',
      tag: '',
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { valueInput, description, currencieInput, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="valueInput">
            Valor:
            <input
              id="valueInput"
              name="valueInput"
              data-testid="value-input"
              type="number"
              onChange={ this.onInputChange }
              value={ valueInput }
            />
          </label>
          <label htmlFor="currencieInput">
            Moeda:
            <select
              id="currencieInput"
              name="currencieInput"
              data-testid="currency-input"
              onChange={ this.onInputChange }
              value={ currencieInput }
            >
              {currencies.map((currencie) => (
                <option
                  key={ currencie }
                  value={ currencie }
                >
                  { currencie }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select
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
            </select>
          </label>
          <label htmlFor="tag">
            Categoria:
            <select
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
            </select>
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              id="description"
              name="description"
              data-testid="description-input"
              type="text"
              onChange={ this.onInputChange }
              value={ description }
            />
          </label>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.array,
}.isRequired;

const mapStateToProps = (store) => ({
  expenses: store.wallet.expenses,
  currencies: store.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
