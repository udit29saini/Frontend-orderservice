import React, { useState,useEffect, Component } from 'react'
import { Container, Form, FormGroup, Input, Label, Button, CardTitle, CardBody } from 'reactstrap'
import axios from 'axios';
import { Card, Col, FormControl, Row, } from 'react-bootstrap';
// import pexel from '/..OrderManagement/pexels-jess-bailey-designs-743986.jpg'
// import "/..OrderManagement/addOrder.css"
import PI from '../OrderManagement/image/3rdimgpayment.png';

   export class PaymentInfo extends Component  {

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
      {/* <h3 className="text-center">Payment Type:</h3> */}
      <div className="logo"><img src={PI} width="600" height="150" ></img></div>
        <Row>
            
            <div className="border main bgcolor1" >
       <Form  className="form text-center"  >
       
               
           <FormGroup >
               <label><h5>Prepaid:</h5></label>
                <input
                className="input4"
                type="checkbox"
                name="subscription"
                value="true"
                 onChange={handleChange('paymentStatus')}
               defaultValue={values.paymentStatus}
      /></FormGroup>
      
      <FormGroup >
               <label><h5>Postpaid:</h5></label>
                <input
                className="input4"
                type="checkbox"
                name="subscription"
                value="false"
                onChange={handleChange('paymentStatus')}
                defaultValue={values.paymentStatus}
      /></FormGroup>
           
      
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
export default PaymentInfo;
