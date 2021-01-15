import React, { Component } from 'react';
import Signup from '@signupcash/provider';
import { Button } from 'theme-ui';

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
      //console.log(cashAccount, bchAddr);
      
      console.log(values);
      this.continue();
    });
  }

  render() { 
    return (
        <Button sx={{
          color: 'primary',
          bg: '#6D28D9'
        }}
          onClick={this.login}
        >
          Login with SIGNUP
        </Button>
    )
  }
}

export default Auth;