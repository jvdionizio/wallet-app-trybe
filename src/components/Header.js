import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
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
            <p data-testid="total-field">0</p>
            <p data-testid="header-currency-field">BRL</p>
          </span>
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (store) => ({
  email: store.user.email,
  expenses: store.wallet.expenses,
  currency: store.wallet.currency,
});

export default connect(mapStateToProps)(Header);
