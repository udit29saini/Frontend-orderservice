import React, { useEffect } from 'react'
import { Container, Form, FormGroup, Input, Label, Button, CardTitle, CardBody } from 'reactstrap'
import { useState } from 'react';
import axios from 'axios';
import base_url from './Api';
import { Card, Col, FormControl, Row, } from 'react-bootstrap';
import Product from './Product';
import ProductList from './ProductList';
import Footer1 from './Footer1';
import pexel from "./pexels-jess-bailey-designs-743986.jpg"
import "./addOrder.css"

const AddOrderForm = (pro) => {

    console.log("pops",pro.prod);
    const [order, setOrder] = useState({});
    const [products,setProducts]=useState(pro.prod);

    useEffect(() => { document.title = "add order"; }, []);

    const postData = (data) => {
        axios.post(`http://localhost:8091/order/createorder`, data).then(
            (response) => {
                console.log("success", response);
                //console.log(orders);
            },
            (error) => {
                console.log(error);
            })
    };

    const handleForm = (e) => {

        postData(order);
        alert("order added")
        console.log(JSON.stringify(order));
        e.preventDefault();
    }

    const createObj = () => {
        //setProducts(pro.prod);
        console.log("mtf",products);
        setOrder({ ...order, products })
        //setProducts([]);
    }


    return (
        <div style={{backgroundImage: `url(${pexel})`}}>
        <Row>
            
            <div className="border main" >
       <Form  className="form"  onSubmit={handleForm}>
       
       <FormGroup>
               <Label ><h4>Name:</h4></Label>
               <Input 
               required
               id="nameCustomer"
               name="nameCustomer"
               placeholder="enter here"
               type="text" className="input1"
               onChange={(e)=>{setOrder({...order,nameCustomer: e.target.value})}}
               />
           </FormGroup >
    
           <FormGroup>
               <Label><h5>SHIPPING ADDRESS:</h5></Label>
               <Input
               required
               id="	shipping address"
               name="shipping address"
               placeholder="enter here"
               type="text" className="input3"
               onChange={(e)=>{setOrder({...order, billingAddress: e.target.value})}}
               />
           </FormGroup>
           <FormGroup>
               <Label><h5>BILLING ADDRESS:</h5></Label>
               <Input
               required
               id="shippingAddress"
               name="shippingAddress"
               placeholder="enter here"
               type="text" className="input3"
               onChange={(e)=>{setOrder({...order,shippingAddress: e.target.value})}}
               />
           </FormGroup>
           <FormGroup>
               <Label ><h4>Phone Number:</h4></Label>
               <Input 
               required
               id="mobileNumber"
               name="mobileNumber"
               placeholder="enter here"
               type="text" className="input1"
               onChange={(e)=>{setOrder({...order,mobileNumber: e.target.value})}}
               />
           </FormGroup >
           <FormGroup>
               <Label ><h4>Email:</h4></Label>
               <Input 
               required
               id="email"
               name="email"
               placeholder="enter here"
               type="text" className="input1"
               onChange={(e)=>{setOrder({...order,email: e.target.value})}}
               />
           </FormGroup >  
           
               <h4>Payment Type:</h4>        
           <FormGroup >
               <label><h5>Prepaid:</h5></label>
                <input
                className="input4"
                type="checkbox"
                name="subscription"
                value="true"
                 onChange={(e)=>{setOrder({...order, paymentStatus: e.target.value})}}
      /></FormGroup>
      
      <FormGroup >
               <label><h5>Postpaid:</h5></label>
                <input
                className="input4"
                type="checkbox"
                name="subscription"
                value="false"
                 onChange={(e)=>{setOrder({...order, paymentStatus: e.target.value})}}
      /></FormGroup>
      
      <br /><br />
                <Container className="text-center">
               <Button  type='submit' onClick={createObj} color="success">Place Order</Button>
               <Button style={{marginLeft:10}} type='reset' color="warning " >Clear</Button>
           </Container> 
           
           
           </Form>
           </div>
           </Row>
       </div>
    )
}

export default AddOrderForm
