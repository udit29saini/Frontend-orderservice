import React, { useEffect } from 'react'
import { Container, Form, FormGroup, Input, Label,Button } from 'reactstrap'
import { useState } from 'react';
import axios from 'axios';
import base_url from './Api';

const Form1 = () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

     const [order, setOrder] = useState({});
     useEffect(()=>{
        document.title="add order";
        postData(order);
                },[]);

     const [products,setProducts]=useState([
        {"dimension": 0,"name": "string","productDescription": "string","productId": 0,"productPrice": 0,"weight": 0}
      ,{"dimension": 1,"name": "stng","productDescription": "sting","productId": 10,"productPrice": 200,"weight": 400}]
      );
      const postData=()=>{axios.post(`${base_url}/createorder`).then(
        (response)=>{
            console.log("success",response);
            //console.log(orders);
    },
        (error)=>{
            console.log(error);
        })};

      const [paymentStatus, setPaymentStatus]=useState();
      const handleStatus=(e)=>{
        const checked= e.target.checked;
        console.log(checked);
        setPaymentStatus(checked);
      }
      //console.log("pro",product);
    const handleForm=(e)=>{

        //setOrder.set(product);
        console.log(order);
        e.preventDefault();
    }
     const createObj =()=>{setOrder({...order,products})}


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
               placeholder="billingAddress"
               type="text" style={{width: 200}} 
               onChange={(e)=>{setOrder({...order, billingAddress: e.target.value})}}
               />
           </FormGroup>
           <FormGroup>
               <Label>Payment status</Label>
               <Input
               id="paymentStatus"
               name="paymentStatus"
               placeholder="enter here"
               type="boolean" style={{width: 200}} 
               onChange={(e)=>{setOrder({...order, paymentStatus: e.target.value})}}
               />
           </FormGroup>
           {/* <FormGroup>
               <Label>ORDER ID</Label>
               <Input
               id="order_id"
               name="order_id"
               placeholder="enter here"
               type="text" 
               style={{width: 200}} 
               onChange={(e)=>{setOrder({...order, order_id: e.target.value})}}
               />
           </FormGroup> */}
           <FormGroup>
               <label>payment Status</label>
           <input
        type="checkbox"
        name="subscription"
        onChange={handleStatus}
        //onChange={(e)=>{setOrder({...order, paymentStatus: e.target.checked})}}
        checked={paymentStatus}
      />{" "}
           </FormGroup>
      

          
           <Container className="text-center">
               <Button type='submit' onClick={createObj} color="success">SUBMIT</Button>
           </Container>    
       </Form>
       </div>
    )
}

export default Form1
