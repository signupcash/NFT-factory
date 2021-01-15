import React, { Component } from 'react';
import Signup from '@signupcash/provider';
import { Button, ThemeProvider } from 'theme-ui';

class Auth extends Component { 
  continue = e => {
    this.props.nextStep();
  }

  login = (e) => {
    const { values } = this.props;
    const signup = new Signup.cash({ addrL: 'DEVELOPER BCH ADDRESS' });
    signup.requestAccess(["bch_address", "cash_account"])
    .then(({cashAccount, bchAddr}) => {
      // logged in
      console.log(cashAccount, bchAddr);
      values.bchAddr = bchAddr;
      console.log(values);
      this.continue();
    });
  }

  render() { 
    return (
      <ThemeProvider>
        <Button
          onClick={this.login}
        >
          Login with Singup
        </Button>
      </ThemeProvider>
    )
  }
}

export default Auth;