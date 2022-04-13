import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { expenses } = this.props;
    const expensesExchanged = expenses.map((expense) => {
      const { currency, value, exchangeRates } = expense;
      const exchanged = value * exchangeRates[currency].ask;
      return exchanged;
    });
    const expensesTotal = expensesExchanged
      .reduce((total, number) => total + number, 0).toFixed(2);
    const { email } = this.props;
    return (
      <header>
        <span>
          <span>
            <p>Email:</p>
            <p data-testid="email-field">{email}</p>
          </span>
          <span>
            <p>Despesa Total: R$</p>
            <p data-testid="total-field">{expensesTotal}</p>
            <p data-testid="header-currency-field">BRL</p>
          </span>
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.array,
}.isRequired;

const mapStateToProps = (store) => ({
  email: store.user.email,
  expenses: store.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
