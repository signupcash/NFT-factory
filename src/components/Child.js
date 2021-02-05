import React from 'react';
import axios from 'axios';
import FormData from 'form-data';
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
import { pinataAPIKey, pinataSecretAPIKey } from '../config/keys';

const Child = ({formData, setForm, navigation }) => {
  const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

  const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
    accept: 'image/*',
    multiple: false,
    maxFiles: 1,
    disabled: false,
    onDrop: (acceptedFiles) => {
      let fd = new FormData();

      acceptedFiles.map(file => {
        return fd.append('file', file);
      });

      axios({
        method: 'POST',
        url: url,
        data: fd,
        headers: {
          pinata_api_key: pinataAPIKey,
          pinata_secret_api_key: pinataSecretAPIKey
        }
      })
      .then((res) => {
        const imageLink = `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
        setForm(prevState => ({
          ...prevState,
          children: {
            ...prevState.children,
            image: imageLink
          }
        }))
      })
      .catch((err) => {
        console.log(err);
      })
    }
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
            >
              <option>{formData.currentGroup.name}</option>
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
              my={4}
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