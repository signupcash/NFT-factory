import React, { Component } from 'react';
import {
  Box,
  Text,
  Button
} from 'theme-ui';

export class Success extends Component {
  /*
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  */

  render() {
    const { values } = this.props;
    return (
      <div>
        <Box
        as='form'
        >
          <Text>Great! Your NFT is created!</Text>
          {console.log(values)}
          <Button sx={{
            color: 'primary',
            bg: '#6D28D9'
          }}
            onClick={'/'}
          >Create another NFT child</Button>
        </Box>
      </div>
    )
  }
}

export default Success;
