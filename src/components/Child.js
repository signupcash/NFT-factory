import React, { Component } from 'react'
import {
  Box,
  Text,
  Label,
  Input,
  Button,
  Select
} from 'theme-ui';

class Child extends Component {
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
          <Text>Create NFT Child</Text>
          <Label htmlFor='childTicker'>Ticker</Label>
          <Input
            name='childTicker'
            type='text'
            mb={3}
            required
            onChange={handleChange('childTicker')}
            defaultValue={values.childTicker}
          />
          <Label htmlFor='childName'>Name</Label>
          <Input
            name='childName'
            type='text'
            mb={3}
            required
            onChange={handleChange('childName')}
            defaultValue={values.childName}
          />
          <Label htmlFor='childImg'>Image Upload</Label>
          <Input
            name='childImg'
            type='file'
            mb={3}
            required
            onChange={handleChange('childImg')}
            defaultValue={values.childImg}
          />
          <Select
            defaultValue={values.groupName}
          >
            <option>{values.groupName}</option>
          </Select>
          <Label htmlFor='mintNumbers'>Numbers to Mint</Label>
          <Input
            name='mintNumbers'
            type='number'
            required min='1'
            mb={3}
            onChange={handleChange('mintNumbers')}
            defaultValue={values.mintNumbers}
          />
          <Button sx={{
            color: 'primary',
            bg: '#6D28D9'
          }}
            onClick={this.continue}
          >Mint</Button>
        </Box>
      </div>
    )
  }
}

export default Child;