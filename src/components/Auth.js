import React from 'react';
import Signup from '@signupcash/provider';
import { 
  Box, 
  Button, 
  Container,
  Text, 
  ThemeProvider,
} from 'theme-ui';
import theme from './theme';

const Auth = ({ formData, setForm, navigation }) => {
  const { bchAddress, cashAcc } = formData;
  const signup = new Signup.cash({ addrL: 'DEVELOPER BCH ADDRESS' });

  function login(event) {
    signup
      .requestAccess(['bch_address', 'cash_account'])
      .then(({ cashAccount, bchAddr }) => {
        navigation.next();
      })
  }

  return (
    <ThemeProvider theme={ theme }>
      <Container as='header' p={4}>
        <Text sx={{
          p: 4,
          textAlign: 'left',
          fontSize: '4vw',
          fontWeight: 'bold',
          fontFamily: 'system-ui, sans-serif',
          letterSpacing: 0.5,
        }}>
          Create your own NFT with signup NFT Factory
        </Text>
        <Container as='div' p={4} sx={{
          maxWidth: '720px',
          m: '0 auto',
          textAlign: 'center'
        }}>
          <Box m={2} p={2}>
            <Button
              variant='buttons.primary'
              m={3}
              onClick={() => login(signup)}
            >
              Login with SIGNUP
            </Button>
          </Box>
        </Container>
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