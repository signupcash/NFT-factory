import React, { Component } from 'react';
import {
  Image,
  Heading,
  Link,
  ThemeProvider,
} from 'theme-ui';
import theme from './theme';
import logo from '../images/signup-logo.png';

export class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Heading
          sx={{
            display: 'flex',
            alignItems: 'left',
            pt: [2, 3, 4],
            pl: [2, 3.5 ,5]
          }}
        >
            <Link href='https://signup.cash/'>
              <Image sx={{ width: [ 80, 90 ,100] }} src={logo} />
            </Link>
          </Heading>
      </ThemeProvider>
    )
  }
}

export default Layout;
