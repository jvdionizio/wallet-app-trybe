/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { SignOut } from 'phosphor-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Text from './styles/Text';
import Icon from './styles/Icon';
import IconBtn from './styles/IconBtn';

class Header extends React.Component {
  render() {
    const { expenses, logout, clearBoard } = this.props;
    const expensesExchanged = expenses.map((expense) => {
      const { currency, value, exchangeRates } = expense;
      const exchanged = value * exchangeRates[currency].ask;
      return exchanged;
    });
    const expensesTotal = expensesExchanged
      .reduce((total, number) => total + number, 0).toFixed(2);
    const { email } = this.props;
    const emailHash = md5(email).toString();
    const { navigation } = this.props;
    console.log(navigation);
    const signOut = () => {
      logout();
      clearBoard();
    };
    return (
      <header
        className="
          w-full
          h-28
          lg:h-20
          flex
          flex-col
          justify-evenly
          sm:flex-row
          sm:item-center
          sm:justify-between
          bg-green-300
          px-4
          py-1
        "
      >
        <span className="flex items-center gap-2">
          <img
            src={ `https://www.gravatar.com/avatar/${emailHash}` }
            alt="Foto de perfil gravatar"
            className="rounded-full w-14 ring-2 ring-blue-500 "
          />
          <Text asChild textColor="white" size="md">
            <p data-testid="email-field">
              {
                email || 'fulano123@email.com'
              }
            </p>
          </Text>
          <IconBtn>
            <button
              type="button"
              onClick={ signOut }
            >
              <Link to="/login">
                <Icon>
                  <SignOut />
                </Icon>
              </Link>
            </button>
          </IconBtn>
        </span>
        <span className="flex gap-2 items-center">
          <Text asChild textColor="white" size="md">
            <p>
              Despesa Total:
            </p>
          </Text>
          <span className="flex">
            <Text asChild textColor="white" weight="bold" size="md">
              <p data-testid="total-field">
                R$
                {' '}
                {expensesTotal}
              </p>
            </Text>
            <Text asChild textColor="white" weight="bold" size="md">
              <p data-testid="header-currency-field">BRL</p>
            </Text>
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

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({ type: 'LOGOUT' }),
  clearBoard: () => dispatch({ type: 'CLEAR_BOARD' }),
});

const mapStateToProps = (store) => ({
  email: store.user.email,
  expenses: store.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
