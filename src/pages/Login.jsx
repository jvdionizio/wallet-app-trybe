/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import { Envelope, EyeClosed, LockKey, Eye } from 'phosphor-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { emailAction } from '../actions';
import Text from '../components/styles/Text';
import TextInputIcon from '../components/styles/TextInputIcon';
import TextInputInput from '../components/styles/TextInputInput';
import TextInputRoot from '../components/styles/TextInputRoot';
import Button from '../components/styles/Button';
import walletLogo from '../images/walletLogo.svg';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
      visiblePass: false,
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

  changeVisibility = () => {
    const { visiblePass } = this.state;
    this.setState({
      visiblePass: !visiblePass,
    });
  };

  render() {
    const { email, password, isButtonDisabled, visiblePass } = this.state;
    return (
      <div
        className="
          w-screen
          h-screen
          flex
          flex-col
          items-center
          justify-center
        "
      >
        <div
          className="
            flex
            flex-col
            sm:w-fit
            items-center
            px-6
            py-8
            gap-6
            bg-gray-100
            m-4
            rounded
          "
        >
          <img
            alt="Logo Wallet App"
            src={ walletLogo }
          />
          <div
            className="
              flex
              flex-col
            "
          >
            <div
              className="
                flex
                flex-col
                gap-1
                mb-2
              "
            >
              <Text weight="medium">
                Endereço de e-mail
              </Text>
              <TextInputRoot>
                <TextInputIcon>
                  <Envelope />
                </TextInputIcon>
                <TextInputInput
                  type="email"
                  data-testid="email-input"
                  name="email"
                  id="emailInput"
                  value={ email }
                  onChange={ this.onInputChange }
                  placeholder="Digite o seu email"
                />
              </TextInputRoot>
            </div>
            <div
              className="
                flex
                flex-col
                gap-1
                mb-5
              "
            >
              <Text weight="medium">
                Senha
              </Text>
              <TextInputRoot>
                <TextInputIcon>
                  <LockKey />
                </TextInputIcon>
                <TextInputInput
                  type={ visiblePass ? 'text' : 'password' }
                  data-testid="password-input"
                  name="password"
                  id="passwordInput"
                  onChange={ this.onInputChange }
                  value={ password }
                  placeholder="***********"
                />
                <div
                  onClick={ this.changeVisibility }
                  onKeyDown={ this.changeVisibility }
                >
                  <TextInputIcon>
                    {
                      visiblePass ? <Eye /> : <EyeClosed />
                    }
                  </TextInputIcon>
                </div>
              </TextInputRoot>
            </div>
            <Link to="/carteira">
              <Button>
                <button
                  type="button"
                  onClick={ this.handleClick }
                  disabled={ isButtonDisabled }
                >
                  Entrar
                </button>
              </Button>
            </Link>
          </div>
          <div
            className="
              flex
              flex-col
              gap-3
              items-center
            "
          >
            <Text textColor="400" decoration="underline">
              Esqueceu sua senha?
            </Text>
            <Text textColor="400" decoration="underline">
              Não possui conta? Crie uma agora!
            </Text>
          </div>
        </div>
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
