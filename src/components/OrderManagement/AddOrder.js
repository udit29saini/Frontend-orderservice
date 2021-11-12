import React, { useEffect } from 'react'
import { Container, Form, FormGroup, Input, Label,Button } from 'reactstrap'
import { useState } from 'react';
import axios from 'axios';
import base_url from './Api';

const AddOrder = () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

     const [order, setOrder] = useState({});
     useEffect(()=>{
        document.title="add order";
        
                },[]);

     const [products,setProducts]=useState([
        {
            "name": "prod1",
            "dimension": 3.55,
            "productDescription": "Fashion1",
            "productPrice": 100.01,
            "weight": 101.0
        }]
      );

      const postData=(data)=>{axios.post(`${base_url}/createorder`, data).then(
        (response)=>{
            console.log("success",response);
            //console.log(orders);
    },
        (error)=>{
            console.log(error);
        })};

      const [status, setPaymentStatus]=useState(false);

    const handleForm=(e)=>{

        postData(order);
        console.log(JSON.stringify(order));
        e.preventDefault();
    }
     const createObj =()=>{setOrder({...order,products})
    }


    return (
        <div >
       <Form onSubmit={handleForm}>
           <FormGroup>
               <Label>Name</Label>
               <Input
               id="nameCustomer"
               name="nameCustomer"
               placeholder="enter here"
               type="text" style={{width: 200}}
               onChange={(e)=>{setOrder({...order,nameCustomer: e.target.value})}}
               />
           </FormGroup>
           <FormGroup>
               <Label>BILLING ADDRESS</Label>
               <Input
               id="shippingAddress"
               name="shippingAddress"
               placeholder="enter here"
               type="text" style={{width: 200}}
               onChange={(e)=>{setOrder({...order,shippingAddress: e.target.value})}}
               />
           </FormGroup>
           <FormGroup>
               <Label>SHIPPING ADDRESS</Label>
               <Input
               id="	billingAddress"
               name="billingAddress"
               placeholder="enter here"
               type="text" style={{width: 200}} 
               onChange={(e)=>{setOrder({...order, billingAddress: e.target.value})}}
               />
           </FormGroup>
    
           <FormGroup>
               <label>payment Status</label>
           <input
        type="checkbox"
        name="subscription"
        onChange={(e)=>{setOrder({...order, paymentStatus: e.target.checked})}}
      />
           </FormGroup>

           <Container className="text-center">
               <Button type='submit' onClick={createObj} color="success">SUBMIT</Button>
           </Container>    
       </Form>
       </div>
    )
}

export default AddOrder
