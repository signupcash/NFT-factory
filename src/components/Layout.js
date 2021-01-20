import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Image,
  Heading,
  Link,
  ThemeProvider,
} from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import theme from './theme';
import logo from '../images/signup-logo.png';

export class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container p={4} bg='muted'>
          <Heading sx={{
            alignItems: 'center',
            display: 'flex'
          }}>
            <Link href='https://signup.cash/' 
              sx={{
                py: 2,
                px: 4,
              }}
            >
              <Image width={100} src={logo} />
            </Link>
            <div sx={{ mx: 'auto' }} />
            <div sx={{ position: 'relative', float: 'right' }}>
              <Button
                to='/!'
                sx={{
                  fontSize: '17px',
                  appearance: 'none',
                  display: 'inline',
                  textAlign: 'center',
                  lineHeight: 'inherit',
                  textDecoration: 'none',
                  fontFamily: 'inherit',
                  flex: 1,
                  m: 0,
                  px: 3,
                  py: 2,
                  border: 0,
                  borderRadius: 8,
                  variant: 'buttons.primary',
                }}
              >
                  Wallet
              </Button>
              <Link href='https://docs.signup.cash/'
                sx={{
                  fontSize: '17px',
                  color: 'grey',
                  fontFamily: 'inherit',
                  textDecoration: 'none',
                  fontWeight: 400,
                  letterSpacing: '0.03em',
                  m: 0,
                  px: 4,
                  py: 2
                }}
              >
                  Documentation
              </Link>
              <Link href='https://github.com/signupcash'
                sx={{
                  fontSize: '30px',
                  color: 'grey',
                  m: 0,
                  px: 4,
                  py: 2,
                }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </div>
          </Heading>
          <Divider sx={{
            color: 'grey',
            opacity: '30%',
            m: 'auto',
            py: 3
          }} />
        </Container>
      </ThemeProvider>
    )
  }
}

export default Layout;
