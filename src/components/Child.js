import React from 'react';
import Dropzone from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import {
  Box,
  Button,
  Card,
  Container,
  Heading, 
  Input, 
  Label, 
  Select, 
  Text,
  ThemeProvider
} from 'theme-ui';
import theme from './theme';

const Child = ({ formData, setForm, navigation }) => {
  const { childTicker, childName, childInitialQuantity } = formData;

  return (
    <ThemeProvider theme={ theme }>
      <Container as='form'>
        <Card variant='cards.primary'>
          <Heading sx={{
            py: 4,
          }}>Create NFT Child Elements</Heading>
          <Card variant='cards.secondary'>
            <Label variant='forms.label'>Ticker</Label>
            <Input
              variant='forms.input'
              name='childTicker'
              defaultValue={childTicker}
              onChange={setForm}
            />
            <Label mt={3} variant='forms.label'>Name</Label>
            <Input
              variant='forms.input'
              name='childName'
              defaultValue={childName}
              onChange={setForm}
            />
            <Label mt={3} variant='forms.label'>NFT Child Image</Label>
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
              {({getRootProps, getInputProps}) => (
                <Box variant='boxs.dragndrop' {...getRootProps()}>
                  <Input {...getInputProps()} />
                  <FontAwesomeIcon icon={faCloudUploadAlt}/>
                  <Text>Drag 'n' Drop Here</Text>
                </Box>
              )}
            </Dropzone>
            <Label mt={3} variant='forms.label'>Group</Label>
            <Select 
              variant='forms.select'
              defaultValue='Test'
            >
              <option>Test</option>
              <option>Test2</option>
            </Select>
            <Label mt={3} variant='forms.label'>Numbers to Mint</Label>
            <Input
              variant='forms.input'
              name='childInitialQuantity'
              type='number'
              defaultValue={childInitialQuantity}
              onChange={setForm}
            />
            <Button
              mt={4}
              variant='buttons.primary'
              onClick={() => navigation.back()}
            >
              Mint
            </Button>
          </Card>
        </Card>
      </Container>
    </ThemeProvider>
  )
}

export default Child;