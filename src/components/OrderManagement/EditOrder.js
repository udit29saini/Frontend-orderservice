import React from 'react'
import { Container, Form, FormGroup, Input, Label,Button } from 'reactstrap'
import { useState } from 'react';
import axios from 'axios';
import base_url from './Api';

const FormUpdate = () => {

     const [order, setOrder] = useState({});

    const handleForm=(e)=>{

        console.log(order);
        e.preventDefault();
    }

    const putData=(data)=>{axios.put(`${base_url}/updateorder`, data).then(
        (response)=>{
            console.log("success",response);
            alert("success");
            //console.log(orders);
    },
        (error)=>{
            console.log(error);
        })};

        const updateData=()=>{
            console.log("seeo",order);
            putData(order);
        }


    return (
        <div >
       <Form onSubmit={handleForm}>
           <FormGroup>
               <Label>Email</Label>
               <Input
               id="email"
               name="email"
               placeholder="enter here"
               type="text" style={{width: 200}}
              
               onChange={(e)=>{setOrder({...order,email: e.target.value})}}
                
               />
           </FormGroup>
           <FormGroup>
               <Label>BILLING ADDRESS</Label>
               <Input
               id="billingAddress"
               name="billingAddress"
               placeholder="enter here"
               type="text" style={{width: 200}}
               onChange={(e)=>{setOrder({...order,billingAddress: e.target.value})}}
               />
           </FormGroup>
           <FormGroup>
               <Label>MOBILE NUMBER</Label>
               <Input
               id="mobile number"
               name="mobile number"
               placeholder="MOBILE NUMBER"
               type="text" style={{width: 200}} 
               onChange={(e)=>{setOrder({...order, mobileNumber: e.target.value})}}
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
               onChange={(e)=>{setOrder({...order, orderId: e.target.value})}}
               />
           </FormGroup>
           <Container className="text-center">
               <Button type='submit' color="success" onClick={updateData}>SUBMIT</Button>
           </Container>
           
       </Form>
       </div>
    )
}

export default FormUpdate
