import React, { Component } from 'react'
import {
  Box,
  Text,
  Label,
  Input,
  Button,
  Container,
  ThemeProvider
} from 'theme-ui';
import theme from './theme';

class Parent extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Container p={4} bg='muted'>
          <Box sx={{
            m: '0 auto',
            flex: 1,
            my: 2,
            p: 4,
            display: 'block',
            textAlign: 'center'
          }}>
            <Box
            as='form'
            mx='25%'
            >
              <Text sx={{
                p: 4,
                textAlign: 'center',
                fontSize: '4vw',
                fontWeight: 'bolder',
                fontFamily: 'system-ui, sans-serif',
                letterSpacing: 0.5,
              }}>
                Create NFT Group
              </Text>
              <Label htmlFor='groupTicker'>Ticker</Label>
              <Input
                name='groupTicker'
                type='text' required
                mb={3}
                onChange={handleChange('groupTicker')}
                defaultValue={values.groupTicker}
              />
              <Label htmlFor='groupName'>Name</Label>
              <Input
                name='groupName'
                type='text' required
                mb={3}
                onChange={handleChange('groupName')}
                defaultValue={values.groupName}
              />
              <Label htmlFor='parentImg'>Image Upload</Label>
              <Input
                name='parentImg'
                type='file' required
                mb={3}
                onChange={handleChange('parentImg')}
                defaultValue={values.parentImg}
              />
              <Label htmlFor='groupInitialQuantity'>Initial Quantity</Label>
              <Input
                name='groupInitialQuantity'
                type='number' required min='1'
                mb={3}
                onChange={handleChange('groupInitialQuantity')}
                defaultValue={values.groupInitialQuantity}
              />
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
                m: 0,
                px: 3,
                py: 2,
                border: 0,
                borderRadius: 8,
                variant: 'buttons.primary',
              }}
                onClick={this.continue}
              >Create</Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    )
  }
}

export default Parent;