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
  Progress,
  Label, 
  Text,
  ThemeProvider 
} from 'theme-ui';
import theme from './theme';
import { pinataAPIKey, pinataSecretAPIKey } from '../config/keys';

const Parent = ({formData, setForm, navigation }) => {
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
          currentGroup: {
            ...prevState.currentGroup,
            image: imageLink
          }
        }))
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
          }}>Create NFT Group Elements</Heading>
          <Card variant='cards.secondary'>
            <Label variant='forms.label'>Ticker</Label>
            <Input
              variant='forms.input'
              name='ticker'
              defaultValue={formData.currentGroup.ticker}
              onChange={handleChange}
              required
            />
            <Label mt={3} variant='forms.label'>Name</Label>
            <Input
              variant='forms.input'
              name='name'
              value={formData.currentGroup.name}
              onChange={handleChange}
              required
            />
            <Label mt={3} variant='forms.label'>NFT Parent Image</Label>
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
            <Label mt={3} variant='forms.label'>Initial Quantity</Label>
            <Input
              variant='forms.input'
              name='initialQuantity'
              type='number'
              min='1'
              value={formData.currentGroup.initialQuantity}
              onChange={handleChange}
              required
            />
            <Button
              my={4} 
              variant='buttons.primary'
              type='submit'
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
