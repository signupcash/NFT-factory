import React from 'react';
import {
  Box,
  Button,
  Container,
  Field,
  ThemeProvider
} from 'theme-ui';
import theme from './theme';

const Child = ({ formData, setForm, navigation }) => {
  const { childTicker, childName, childImg, childInitialQuantity } = formData;
  console.log(childTicker);

  return (
    <ThemeProvider theme={ theme }>
      <Container as='form' p={4} sx={{
        maxWidth: '720px',
        m: '0 auto',
        textAlign: 'center'
      }}>
        <h2 sx={{ variant: theme.styles.h2 }}>Create NFT Child Elements</h2>
        <Box sx={{
          p: 2,
          borderRadius: 4,
          boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)'
        }}>
          <Box m={2}>
            <Field
              label='Ticker'
              name='childTicker'
              defaultValue={childTicker}
              onChange={setForm}
              mb={3}
              aria-autocomplete='none'
            />
            <Field
              label='Name'
              name='childName'
              defaultValue={childName}
              mb={3}
              aria-autocomplete='none'
            />
            <Field
              label='Image'
              name='childImg'
              defaultValue={childImg}
              mb={3}
              aria-autocomplete='none'
            />
            <Field
              label='Initial Quanitiy'
              name='childInitialQuantity'
              defaultValue={childInitialQuantity}
              aria-autocomplete='none'
            />
            <Button
              variant='buttons.primary' 
              my={3}
              onClick={() => navigation.next()}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Child;