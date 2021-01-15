import React, { Component } from 'react'
import {
  Box,
  Text,
  Label,
  Input,
  Button
} from 'theme-ui';

class Parent extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <Box
        as='form'
        >
          <Text>Create NFT Group</Text>
          <Label htmlFor='groupTicker'>Ticker</Label>
          <Input
            name='groupTicker'
            type='text' required
            mb={3}
            onChange={handleChange('groupTicker')}
            defaultValue={values.groupTicker}
          />
          <Label htmlFor='groupName'>Name</Label>
          <Input
            name='groupName'
            type='text' required
            mb={3}
            onChange={handleChange('groupName')}
            defaultValue={values.groupName}
          />
          <Label htmlFor='parentImg'>Image Upload</Label>
          <Input
            name='parentImg'
            type='file' required
            mb={3}
            onChange={handleChange('parentImg')}
            defaultValue={values.parentImg}
          />
          <Label htmlFor='groupInitialQuantity'>Initial Quantity</Label>
          <Input
            name='groupInitialQuantity'
            type='number' required min='1'
            mb={3}
            onChange={handleChange('groupInitialQuantity')}
            defaultValue={values.groupInitialQuantity}
          />
          <Button sx={{
            color: 'primary',
            bg: '#6D28D9'
          }}
            onClick={this.continue}
          >Create</Button>
        </Box>
      </div>
    )
  }
}

export default Parent;