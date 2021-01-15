import React, { Component } from 'react';
import Auth from './Auth';
import Child from './Child';
import Parent from './Parent';
import Success from './Success';

export class Hero extends Component {
  state = {
    step: 0,
    bchAddr: '',
    cashAccount: '',
    groupTicker: '',
    groupName: '',
    parentImg: '',
    groupInitialQuantity: 0,
    childTicker: '',
    childName: '',
    childImg: '',
    mintNumbers: 0,
    mintValid: false
  }

  // Proceed to Next Step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
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
      groupInitialQuantity,
      childTicker,
      childName,
      childImg,
      mintNumbers,
      mintValid
    } = this.state;
    
    const values = {
      bchAddr, 
      cashAccount, 
      groupTicker, 
      groupName, 
      parentImg, 
      groupInitialQuantity,
      childTicker,
      childName,
      childImg,
      mintNumbers,
      mintValid
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
          <Child
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Success
            prevStep={this.prevStep}
            values={values}
          />
        );
      default:
        return (
          <h2>Invalid</h2>
        );
    }
  }
}

export default Hero;
