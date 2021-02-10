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

const Auth = ({formData, setForm, navigation }) => {
  const signup = new Signup.cash({ addrL: 'DEVELOPER BCH ADDRESS' });

  function login (e) {
    e.preventDefault();
    signup.requestAccess(['bch_address'])
      .then(({ bchAddr }) => {
        setForm({...formData, bchAddress: bchAddr});
        navigation.next();
      })
  }

  return (
    <ThemeProvider theme={ theme }>
      <Container as='form' marginTop='-6%'>
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