import React, { useState,useEffect, Component } from 'react'
import { Container, Form, FormGroup, Input, Label, Button, CardTitle, CardBody } from 'reactstrap'
import axios from 'axios';
import { Card, Col, FormControl, Row, } from 'react-bootstrap';
// import pexel from '/..OrderManagement/pexels-jess-bailey-designs-743986.jpg'
// import "/..OrderManagement/addOrder.css"
import "../OrderManagement/addOrder.css"
import PI from '../OrderManagement/image/2ndimgAddress.png';

   export class Address extends Component  {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };

      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
   

  render() {
    const {values, handleChange} = this.props;
    return(

    <div className="bgcolor2" >
      {/* <h3 className="text-center">Enter Address</h3> */}
      <div className="logo"><img src={PI} width="400" height="150" ></img></div>
        <Row>
            
            <div className=" main bgcolor1" >
       <Form  className="form text-center"  >
       
       <FormGroup>
               <Label ><h4>Shipping Address</h4></Label>
               <Input 
               required
               id="shippingAddress"
               name="shippingAddress"
               placeholder="enter here"
               type="text" className="input1"
               onChange={handleChange('shippingAddress')}
               defaultValue={values.shippingAddress}
               />
           </FormGroup >
           <br /><br />
           <FormGroup>
               <Label ><h4>Billing Address:</h4></Label>
               <Input 
               required
               id="billingAddress"
               name="billingAddress"
               placeholder="enter here"
               type="text" className="input1"
               onChange={handleChange('billingAddress')}
               defaultValue={values.billingAddress}
               />
           </FormGroup >
           
      
      <br /><br />
                <Container className="text-center">
               <Button  type='submit' onClick={this.back} color="warning">back</Button>
               <Button className="btn2" type='submit' onClick={this.continue} color="success">continue</Button>
               
           </Container> 
           
           
           </Form>
           </div>
           </Row>
       </div>
  );
  }
}
export default Address;
