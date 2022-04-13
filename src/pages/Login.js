import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { emailAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    };
  }

  validateButton = () => {
    const { email, password } = this.state;
    const minPasswordLength = 6;
    const emailFormatRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (password.length >= minPasswordLength && email.match(emailFormatRegex)) {
      this.setState({
        isButtonDisabled: false,
      });
    } else {
      this.setState({
        isButtonDisabled: true,
      });
    }
  }

  onInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, this.validateButton);
  }

  handleClick = () => {
    const { email } = this.state;
    const { emailDispatch } = this.props;
    emailDispatch(email);
  }

  render() {
    const { email, password, isButtonDisabled } = this.state;
    return (
      <div>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          id="emailInput"
          value={ email }
          onChange={ this.onInputChange }
          placerholder="Digite o seu nome"
        />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          id="passwordInput"
          onChange={ this.onInputChange }
          value={ password }
        />
        <Link to="/carteira">
          <button
            type="button"
            onClick={ this.handleClick }
            disabled={ isButtonDisabled }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(emailAction(email)),
});

Login.propTypes = {
  emailDispatch: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
