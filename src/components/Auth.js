import React from 'react';
import Signup from '@signupcash/provider';
import {  
  Button, 
  Card,
  Container,
  Text, 
  ThemeProvider,
} from 'theme-ui';
import theme from './theme';

const Auth = ({ formData, setForm, navigation }) => {
  const { bchAddress } = formData;
  const signup = new Signup.cash({ addrL: 'DEVELOPER BCH ADDRESS' });

  function login (e, formData) {
    e.preventDefault();
    signup.requestAccess(['bch_address', 'cash_account'])
      .then(({ cashAccount, bchAddr }) => {
        console.log(bchAddr, cashAccount);
        navigation.next();
      })
  }

  return (
    <ThemeProvider theme={ theme }>
      <Container as='form'>
        <Card variant='cards.secondary'>
          <Text as='h2' variant='styles.h2' sx={{ fontSize: ['5vw'] }}>👾</Text>
          <Text as='h2' variant='styles.h2'>Create your own NFT with signup</Text>
          <Card 
            variant='cards.secondary' 
            sx={{ 
              width: ['60px', '80px', '100px'], 
              m: '0 auto'
            }}
          >
            <Button 
              variant='buttons.primary' 
              sx={{ mt: '20%' }}
              name='bchAddress'
              defaultValue={bchAddress}
              onChange={setForm}
              onClick={login}
            >
              Login
            </Button>
          </Card>
        </Card>
      </Container>
    </ThemeProvider>
  )
}

export default Auth;

/*
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
      <ThemeProvider theme={theme}>
        <Container sx={{ position: 'relative' }}>
          <Heading sx={{
            mt: 4,
            mr: 6,
            ml: 4,
            pt: 4,
            display: 'flex',
          }}
          >
            <Text sx={{
              p: 4,
              textAlign: 'left',
              fontSize: '4vw',
              fontWeight: 'bolder',
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: 0.5,
            }}>
              Create your own NFT with signup NFT Factory
            </Text>
          </Heading>
          <Box sx={{
            mx: '40%',
            my: 2,
            p: 4,
            display: 'flex'
          }}>
            <Button sx={{
              fontSize: '20px',
              appearance: 'none',
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center',
              lineHeight: 'inherit',
              textDecoration: 'none',
              fontFamily: 'inherit',
              flex: 1,
              mx: 'auto',
              px: 3,
              py: 2,
              border: 0,
              borderRadius: 8,
              variant: 'buttons.primary',
            }}
            onClick={this.login}
            >
              Login with SIGNUP
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    )
  }
}

export default Auth; */