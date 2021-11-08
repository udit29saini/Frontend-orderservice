import React from 'react'
import { Container, Form, FormGroup, Input, Label,Button } from 'reactstrap'
import { useState } from 'react';

const Form1 = () => {

     const [order, setOrder] = useState({});

    const handleForm=(e)=>{

        console.log(order);
        e.preventDefault();
    }


    return (
        <div >
       <Form onSubmit={handleForm}>
           <FormGroup>
               <Label>Name</Label>
               <Input
               id="name_customer"
               name="name_customer"
               placeholder="enter here"
               type="text" style={{width: 200}}
               onChange={(e)=>{setOrder({...order,name_customer: e.target.value})}}
               />
           </FormGroup>
           <FormGroup>
               <Label>BILLING ADDRESS</Label>
               <Input
               id="billing_address"
               name="billing_address"
               placeholder="enter here"
               type="text" style={{width: 200}}
               onChange={(e)=>{setOrder({...order,billing_address: e.target.value})}}
               />
           </FormGroup>
           <FormGroup>
               <Label>SHIPPING ADDRESS</Label>
               <Input
               id="	shipping_address"
               name="shipping_address"
               placeholder="SHIPPING ADDRESS"
               type="text" style={{width: 200}} 
               onChange={(e)=>{setOrder({...order, shipping_address: e.target.value})}}
               />
           </FormGroup>
           <FormGroup>
               <Label>PAYMENT INFO</Label>
               <Input
               id="order_cost"
               name="order_cost"
               placeholder="enter here"
               type="text" style={{width: 200}} 
               onChange={(e)=>{setOrder({...order, order_cost: e.target.value})}}
               />
           </FormGroup>
           <FormGroup>
               <Label>ORDER ID</Label>
               <Input
               id="order_id"
               name="order_id"
               placeholder="enter here"
               type="text" 
               style={{width: 200}} 
               onChange={(e)=>{setOrder({...order, order_id: e.target.value})}}
               />
           </FormGroup>
           <Container className="text-center">
               <Button type='submit' color="success">SUBMIT</Button>
           </Container>
           
       </Form>
       </div>
    )
}

export default Form1
