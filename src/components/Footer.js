import React, { Component } from 'react';
import {
  Text,
  ThemeProvider
} from 'theme-ui';
import theme from './theme';

export class Footer extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Text 
          as='footer' 
          variant='text.footer' 
          sx={{
            textAlign: 'center',
            pb: [2, 3, 4],
            pl: [2, 3.5 ,5]
          }}
        >
          &#169; 2021 signup | All rights reserved
        </Text>
      </ThemeProvider>
    )
  }
}

export default Footer
