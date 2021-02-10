import React from 'react';
import {
  Card,
  ThemeProvider,
  Container,
  Image,
  Heading,
  Text,
  Button
} from 'theme-ui';
import theme from './theme';

const Success = ({ formData, setForm, childIdx, setChildIdx, navigation }) => {
  const { go } = navigation;

  const handleSubmit = (e) => {
    handleNextChild();
    go('child');
  }

  const handleNextChild = (e) => {
    setChildIdx(childIdx + 1);

    setForm(prevState => ({
      ...prevState,
      children: [
        ...prevState.children,
        { 
          ticker: '',
          name: '',
          image: '',
          mintQuantity: ''
        }
      ]
    }))
  }

  const NFTChildren = formData.children.map((data) => 
    <Card variant='cards.nftIndex'>
      <Image
        variant='styles.nftImg' 
        src={data.image}
      />
      <Card variant='cards.nftText'>
        <Text as='h3' variant='styles.h3'>{data.name}</Text>
        <Text as='h4' variant='styles.h4'>Mint Quantity:&emsp;<b>{data.mintQuantity}</b></Text>
      </Card>
    </Card>
  )

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Card varient='cards.primary'>
          <Heading sx={{ pt: 4 }}>Great!</Heading>
          <Heading sx={{ pb: 2 }}>Your NFT is created!</Heading>
          <Card variant='cards.secondary'>
            <Card variant='cards.secondary' sx={{ backgroundColor: 'primary' }}>
              <Text variant='styles.h3' color='white' sx={{ textAlign: 'left', padding: 2 }}>{formData.currentGroup.name}</Text>
            </Card>
            {NFTChildren}
            <Button
              mt={2}
              mb={4}
              width='20%'
              varient='buttons.primary'
              onClick={handleSubmit}
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
