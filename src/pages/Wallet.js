import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  async componentDidMount() {
    const { fetchCur } = this.props;
    await fetchCur();
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCur: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Wallet);
