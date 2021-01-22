import React from 'react';
import {
  Box,
  Button,
  Container,
  Field,
  ThemeProvider
} from 'theme-ui';
import theme from './theme';

const Parent = ({ formData, setForm, navigation }) => {
  const { groupTicker, groupName, parentImg, groupInitialQuantity } = formData;
  console.log(groupTicker);

  return (
    <ThemeProvider theme={ theme }>
      <Container as='form' p={4} sx={{
        maxWidth: '720px',
        m: '0 auto',
        textAlign: 'center'
      }}>
        <h2 sx={{ variant: theme.styles.h2 }}>Create NFT Group Elements</h2>
        <Box sx={{
          p: 2,
          borderRadius: 4,
          boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)'
        }}>
          <Box m={2}>
            <Field
              label='Ticker'
              name='groupTicker'
              defaultValue={groupTicker}
              onChange={setForm}
              mb={3}
              aria-autocomplete='none'
            />
            <Field
              label='Name'
              name='groupName'
              defaultValue={groupName}
              mb={3}
              aria-autocomplete='none'
            />
            <Field
              label='Image'
              name='parentImg'
              defaultValue={parentImg}
              mb={3}
              aria-autocomplete='none'
            />
            <Field
              label='Initial Quanitiy'
              name='groupInitialQuantity'
              defaultValue={groupInitialQuantity}
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

export default Parent
