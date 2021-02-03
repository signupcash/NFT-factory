import React from 'react';
import { useDropzone } from 'react-dropzone';
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

const Child = ({formData, setForm, navigation }) => {

  const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
    accept: 'image/*',
    multiple: false,
    disabled: false,
    onDrop: (acceptedFiles) => {
      /*setChildImage(
        acceptedFiles.map((upFile) => Object.assign(upFile, {
          preview:URL.createObjectURL(upFile)
        }))
      ) */
    }

    /* {childImage.map((upFile) => {
                      return (
                        <Card variant='cards.secondary'>
                          <Image src={upFile.preview} alt='preview' />
                        </Card>
                        )
                      })}
                      */
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      children: {
        ...prevState.children,
        [name]: value
      }
    }));
  };

  function handleClick() {
    navigation.next();
  }

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
              name='ticker'
              value={formData.children.ticker}
              onChange={handleChange}
            />
            <Label mt={3} variant='forms.label'>Name</Label>
            <Input
              variant='forms.input'
              name='name'
              defaultValue={formData.children.name}
              onChange={handleChange}
            />
            {console.log(formData)}
            <Label mt={3} variant='forms.label'>NFT Child Image</Label>
            <Box variant='boxs.dragndrop' {...getRootProps()}>
              <Input {...getInputProps()} />
              {
                isDragActive 
                ? <Text>Drop Image Here</Text> 
                : acceptedFiles
                  ? <Text>
                      <FontAwesomeIcon icon={faCloudUploadAlt}/>
                      <br /> 
                      Drag 'n' Drop Image Here
                    </Text>
                  : <div>
                      
                    </div>
              }
            </Box>
            <Label mt={3} variant='forms.label'>Group</Label>
            <Select 
              variant='forms.select'
              defaultValue='Test'
            >
              <option>{}</option>
            </Select>
            <Label mt={3} variant='forms.label'>Numbers to Mint</Label>
            <Input
              variant='forms.input'
              name='mintQuantity'
              type='number'
              defaultValue={formData.children.mintQuantity}
              onChange={handleChange}
            />
            <Button
              mt={4}
              variant='buttons.primary'
              type='submit'
              onClick={() => handleClick()}
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