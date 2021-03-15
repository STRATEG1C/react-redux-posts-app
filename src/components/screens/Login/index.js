import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../store/Auth';
import PageWrapper from '../../common/PageWrapper';
import TextInput from '../../common/TextInput';
import Button from '../../common/Button';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginForm: {
        email: '',
        password: ''
      },
      formErrors: {
        email: '',
        password: ''
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.user !== this.props.user) {
      this.props.history.push('/posts');
    }
  }

  onFormChange = (field, value) => {
    this.setState(prevState => ({
      ...prevState,
      loginForm: {
        ...prevState.loginForm,
        [field]: value
      },
      formErrors: {
        ...prevState.func,
        [field]: false
      }
    }))
  }

  onLogin = () => {
    const { loginForm, formErrors } = this.state;

    !loginForm.email.trim() && (formErrors.email = 'Field cannot be empty');
    !loginForm.password.trim() && (formErrors.password = 'Field cannot be empty');

    // if (!loginForm.email.trim() || !loginForm.password.trim()) return;

    this.props.onLogin(this.state.loginForm);
  }

  render() {
    const { loginForm, formErrors } = this.state;
    const { isError } = this.props;

    return (
      <PageWrapper title="TItle">
        <div className="login-form">
          <TextInput
            label="Email"
            value={loginForm.email}
            onChange={this.onFormChange}
            name="email"
            error={formErrors.email}
          />
          <TextInput
            label="Password"
            value={loginForm.password}
            onChange={this.onFormChange}
            name="password"
            error={formErrors.password}
          />
          <Button
           onClick={this.onLogin}
           text="Log in"
          />
          {isError && <p className="error">Invalid credentials</p>}
        </div>
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  isError: state.auth.isError,
  user: state.auth.user,
});

const mapDispatchToProps = {
  onLogin: login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
