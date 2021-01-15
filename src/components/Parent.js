import React from 'react';
import {
  Box,
  Text,
  Label,
  Input,
  Button
} from 'theme-ui';

const Parent = () => {
  return (
    <div>
      <Box
        as='form'
        onSubmit={e => e.preventDefault()}
      >
        <Text>Create NFT Group</Text>
        <Label htmlFor='ticker'>Ticker</Label>
        <Input
          name='ticker'
          mb={3}
        />
        <Label htmlFor='name'>Name</Label>
        <Input
          name='name'
          mb={3}
        />
        <Label htmlFor='image'>Image Upload</Label>
        <Input
          name='image'
          mb={3}
        />
        <Label htmlFor='initialQuantity'>Initial Quantity</Label>
        <Input
          name='initialQuanitity'
          mb={3}
        />
        <Button>Create</Button>
      </Box>
    </div>
  )
}

export default Parent
