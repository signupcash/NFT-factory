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
  Text,
  ThemeProvider 
} from 'theme-ui';
import theme from './theme';

const Parent = ({formData, setForm, navigation }) => {
  const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
    accept: 'image/*',
    multiple: false,
    disabled: false,
    onDrop: (acceptedFiles) => {
      /*setParentImage(
        acceptedFiles.map((upFile) => Object.assign(upFile, {
          preview:URL.createObjectURL(upFile)
        }))
      ) */
    }
  })

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      currentGroup: {
        ...prevState.currentGroup,
        [name]: value
      }
    }));
  }

  function handleClick() {
    navigation.next();
  }

  return (
    <ThemeProvider theme={ theme }>
      <Container as='form'>
        <Card variant='cards.primary'>
          <Heading sx={{
            py: 4,
          }}>Create NFT Group Elements</Heading>
          <Card variant='cards.secondary'>
            <Label variant='forms.label'>Ticker</Label>
            <Input
              variant='forms.input'
              name='ticker'
              defaultValue={formData.currentGroup.ticker}
              onChange={handleChange}
            />
            {console.log(formData)}
            <Label mt={3} variant='forms.label'>Name</Label>
            <Input
              variant='forms.input'
              name='name'
              value={formData.currentGroup.name}
              onChange={handleChange}
            />
            <Label mt={3} variant='forms.label'>NFT Parent Image</Label>
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
                  : <div></div>
              }
            </Box>
            <Label mt={3} variant='forms.label'>Initial Quantity</Label>
            <Input
              variant='forms.input'
              name='initialQuantity'
              type='number'
              value={formData.currentGroup.initialQuantity}
              onChange={handleChange}
            />
            {console.log(formData)}
            <Button
              mt={4} 
              variant='buttons.primary'
              type='submit'
              onClick={() => handleClick()}
            >
              Create
            </Button>
          </Card>
        </Card>
      </Container>
    </ThemeProvider>
  )
} 

export default Parent;
