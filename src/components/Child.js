import React, { useState, useEffect } from 'react';
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
  Image,
  Label, 
  Select,
  Progress, 
  Text,
  ThemeProvider
} from 'theme-ui';
import theme from './theme';
import { pinataAPIKey, pinataSecretAPIKey } from '../config/keys';

const Child = ({formData, setForm, childIdx, setChildIdx, navigation }) => {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState();
  const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    multiple: false,
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      let fd = new FormData();

      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));

      acceptedFiles.map(file => {
        return fd.append('file', file);
      });

      axios({
        method: 'POST',
        url: url,
        data: fd,
        headers: {
          'Content-Type': 'multipart/form-data',
          pinata_api_key: pinataAPIKey,
          pinata_secret_api_key: pinataSecretAPIKey
        },
        onUploadProgress: data => {
          setProgress(Math.round((100 * data.loaded) / data.total))
        },
      })
      .then((res) => {
        const imageLink = `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
        setForm(prevState => ({
          ...prevState,
          children: prevState.children.map((child, idx) => {
            if (childIdx !== idx) return child;
            return {
              ...child,
              image: imageLink
            }
          })
        }));
      })
      .catch((err) => {
        console.log(err);
      })
    }
  });

  const thumbs = files.map(file => (
    <Box variant='styles.thumb' key={file.name}>
      <Box variant='styles.thumbInner'>
        <Image
          variant='styles.img' 
          src={file.preview}
        />
      </Box>
    </Box>
  ));
  
  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
    return () => {
      files.forEach(file => URL.revokeObjectURL())
    }
  }, [files]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      children: prevState.children.map((child, idx) => {
        if (childIdx !== idx) return child;
        return {
          ...child,
          [name]: value
        }
      })
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigation.next();
  }

  return (
    <ThemeProvider theme={ theme }>
      <Container
        as='form'
        onSubmit={handleSubmit}
      >
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
              onKeyDown={handleChange}
              required
            />
            <Label mt={3} variant='forms.label'>Name</Label>
            <Input
              variant='forms.input'
              name='name'
              defaultValue={formData.children.name}
              onChange={handleChange}
              required
            />
            <Label mt={3} variant='forms.label'>NFT Child Image</Label>
            <Box variant='boxs.dragndrop' {...getRootProps()}>
              <Input {...getInputProps()} />
              <Text>
                <FontAwesomeIcon icon={faCloudUploadAlt}/>
                <br />
                Drag 'n' Drop Images here
              </Text>
            </Box>
            {progress && <Progress max={1} value={progress/100}></Progress>}
            { progress === 100 && <Box variant='styles.thumbsContainer'>{thumbs}</Box> }
            <Label mt={3} variant='forms.label'>Group</Label>
            <Select 
              disabled
            >
              <option>{formData.currentGroup.name}</option>
            </Select>
            <Label mt={3} variant='forms.label'>Numbers to Mint</Label>
            <Input
              variant='forms.input'
              name='mintQuantity'
              type='number'
              placeholder='Must be less than initial quantity'
              defaultValue={formData.children.mintQuantity}
              onChange={handleChange}
              required
            />
            <Button
              my={4}
              variant='buttons.primary'
              type='submit'
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