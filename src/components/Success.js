import React from 'react';
import {
  Card,
  ThemeProvider,
  Container,
  Heading,
  Button
} from 'theme-ui';
import theme from './theme';

const Success = ({ formData, navigation }) => {
  const { go } = navigation;

  return (
    <ThemeProvider theme={theme}>
      <Container as='form'>
        <Card varient='cards.primary'>
          <Heading sx={{ pt: 4 }}>Great!</Heading>
          <Heading sx={{ pb: 4 }}>Your NFT is created!</Heading>
          <Card variant='cards.secondary'>
            <Button
              mt={2}
              mb={4}
              width='20%'
              varient='buttons.primary'
              onClick={() => go('child')}
            >
              Create another NFT Child
            </Button>
          </Card>
        </Card>
      </Container>
    </ThemeProvider>
  )
}

export default Success;
