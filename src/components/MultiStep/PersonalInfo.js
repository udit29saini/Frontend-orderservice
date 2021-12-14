import React, { useState,useEffect, Component } from 'react'
import { Container, Form, FormGroup, Input, Label, Button, CardTitle, CardBody } from 'reactstrap'
import axios from 'axios';
import { Card, Col, FormControl, Row, } from 'react-bootstrap';
// import pexel from '/..OrderManagement/pexels-jess-bailey-designs-743986.jpg'
 import "../OrderManagement/addOrder.css"
 import PI from '../OrderManagement/image/1stimgPI.png';

   export class PersonalInfo extends Component  {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };

    
   

  render() {
    const {values, handleChange} = this.props;
    return(

    <div className="bgcolor2">
        
        {/* <h3 className="text-center">Enter Personal Info</h3> */}
        <div className="logo"><img src={PI} width="300" height="100" ></img></div>
        <Row>
            
            <div className="border main bgcolor1" >
       <Form  className="form text-center"  >
       
       <FormGroup>
               <Label ><h5>Name:</h5></Label>
               <Input 
               required
               id="nameCustomer"
               name="nameCustomer"
               placeholder="enter here"
               type="text" className="input1"
               onChange={handleChange('nameCustomer')}
               defaultValue={values.nameCustomer}
               />
           </FormGroup >
    
           <FormGroup>
               <Label ><h5>Phone Number:</h5></Label>
               <Input 
               required
               id="mobileNumber"
               name="mobileNumber"
               placeholder="enter here"
               type="text" className="input1"
               onChange={handleChange('mobileNumber')}
               defaultValue={values.mobileNumber}
               />
           </FormGroup >
           <FormGroup>
               <Label ><h5>Email:</h5></Label>
               <Input 
               required
               id="email"
               name="email"
               placeholder="enter here"
               type="text" className="input1"
               onChange={handleChange('email')}
               defaultValue={values.email}
               />
           </FormGroup > 
           
      
      <br /><br />
                <Container className="text-center">
               <Button  type='submit' onClick={this.continue} color="success">continue</Button>
               
           </Container> 
           
           
           </Form>
           </div>
           </Row>
       </div>
  );
  }
}
export default PersonalInfo;
