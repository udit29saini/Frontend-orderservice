import React from 'react'
import { useState } from 'react'
import PersonalInfo from './PersonalInfo'
import Address from './Address'
import PaymentInfo from './PaymentInfo'
import './css/app.css'
import './css/normilize.css'
import './css/skeleton.css'

import { Component } from 'react';
import Success from './Success';

export class Start extends Component {

  
  state = {
    step: 1,
    nameCustomer: '',
    mobileNumber: '',
    email: '',
    billingAddress: '',
    shippingAddress: '',
    paymentStatus: '',
    products: this.props.prod
  };
  

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
 

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    //console.log("prdo",this.props.prod);
    const { step } = this.state;
    const { nameCustomer, mobileNumber, email, shippingAddress, billingAddress, paymentStatus } = this.state;
    const values = { nameCustomer, mobileNumber, email, shippingAddress, billingAddress, paymentStatus };

    switch (step) {
      case 1:
        return (
          <PersonalInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Address
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <PaymentInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <Success obj={this.state}  
        nextStep={this.nextStep}
        prevStep={this.prevStep}
          />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default Start;
