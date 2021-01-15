import React, { Component } from 'react';
import Auth from './Auth';
import Parent from './Parent';

export class Hero extends Component {
  state = {
    step: 0,
    bchAddr: '',
    cashAccount: '',
    groupTicker: '',
    groupName: '',
    parentImg: '',
    groupInitialQuantity: 0,
  }

  // Proceed to Next Step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Handle fields Change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      bchAddr, 
      cashAccount, 
      groupTicker, 
      groupName, 
      parentImg, 
      groupInitialQuantity 
    } = this.state;
    
    const values = {
      bchAddr, 
      cashAccount, 
      groupTicker, 
      groupName, 
      parentImg, 
      groupInitialQuantity 
    }

    switch(step) {
      case 0:
        return (
          <Auth
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 1:
        return (
          <Parent
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2: 
        return (
          <h2>Child NFT</h2>
        );
      case 3:
        return (
          <h2>Success</h2>
        );
      default:
        return (
          <h2>Invalid</h2>
        );
    }
  }
}

export default Hero;
