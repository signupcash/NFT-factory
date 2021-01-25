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
  Text,
  ThemeProvider 
} from 'theme-ui';
import theme from './theme';

const Parent = ({ formData, setForm, navigation }) => {
  const { groupTicker, groupName, groupInitialQuantity } = formData;

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
              name='groupTicker'
              defaultValue={groupTicker}
              onChange={setForm}
            />
            <Label mt={3} variant='forms.label'>Name</Label>
            <Input
              variant='forms.input'
              name='groupName'
              defaultValue={groupName}
              onChange={setForm}
            />
            <Label mt={3} variant='forms.label'>NFT Parent Image</Label>
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
              {({getRootProps, getInputProps}) => (
                <Box variant='boxs.dragndrop' {...getRootProps()}>
                  <Input {...getInputProps()} />
                  <FontAwesomeIcon icon={faCloudUploadAlt}/>
                  <Text>Drag 'n' Drop Here</Text>
                </Box>
              )}
            </Dropzone>
            <Label mt={3} variant='forms.label'>Initial Quantity</Label>
            <Input
              variant='forms.input'
              name='groupInitialQuantity'
              type='number'
              defaultValue={groupInitialQuantity}
              onChange={setForm}
            />
            <Button
              mt={4} 
              variant='buttons.primary'
              onClick={() => navigation.next()}
            >
              Create
            </Button>
          </Card>
        </Card>
      </Container>
    </ThemeProvider>
  )

  /*return (
    <ThemeProvider theme={theme}>
      <Container as='form' p={4} sx={{
        maxWidth: '720px',
        m: '0 auto',
        textAlign: 'center'
      }}>
        <h2 sx={{ variant: theme.styles.h2 }}>Create NFT Group Elements</h2>
        <Box sx={{
          p: 2,
          borderRadius: '0, 0, 2, 2 black'
        }}>
          <Box m={2}>
            <Text sx={{
              fontSize: '20px',
              marginTop: 3,
              textAlign: 'left',
              variant: theme.styles.text
            }}>Ticker</Text>
            <Field
              name='groupTicker'
              defaultValue={groupTicker}
              onChange={setForm}
              mb={3}
              aria-autocomplete='none'
            />
            <Text sx={{
              fontSize: '20px',
              marginTop: 3,
              textAlign: 'left'
            }}>Name</Text>
            <Field
              name='groupName'
              defaultValue={groupName}
              onChange={setForm}
              mb={3}
              aria-autocomplete='none'
            />
            <Field mb={3}>
              <Dropzone sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: '20px',
                borderWidth: 2,
                borderRadius: 2,
                borderColor: '#eeeeee',
                borderStyle: 'dashed',
                backgroundColor: '#fafafa',
                color: '#bdbdbd',
                outline: 'none',
                transition: 'border .24s ease-in-out'
              }}>
                {({getRootProps, getInputProps}) => (
                  <div { ...getRootProps() }>
                    <Text sx={{
                      fontSize: '20px',
                      marginTop: 3,
                      textAlign: 'left'
                    }}>Drag and Drop your NFT here, or click to select files</Text>
                    <input { ...getInputProps() } 
                      name='parentImg'
                      defaultValue={parentImg}
                      onChange={setForm}
                      mb={3}
                      aria-autocomplete='none'
                    />
                  </div>
                )}
              </Dropzone>
            </Field>
            <Text sx={{
              fontSize: '20px',
              marginTop: 3,
              textAlign: 'left'
            }}>Initial Quanitiy</Text>
            <Field
              name='groupInitialQuantity'
              defaultValue={groupInitialQuantity}
              onChange={setForm}
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
  ) */
} 

export default Parent;
