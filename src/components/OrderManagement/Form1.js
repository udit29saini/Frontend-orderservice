import React, { useEffect } from 'react'
import { Container, Form, FormGroup, Input, Label,Button } from 'reactstrap'
import { useState } from 'react';
import axios from 'axios';
import base_url from './Api';

const Form1 = () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

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

    //   const handleStatus=(e)=>{
    //     const paymentStatus= e.target.checked;
    //     console.log(paymentStatus);
    //     setPaymentStatus(paymentStatus);
    //     setOrder({...order,paymentStatus});
    //   }
      //console.log("pro",product);
    const handleForm=(e)=>{

        postData(order);
        // setPaymentStatus(status);
        // setOrder({...order,status});
        //setOrder.set(product);
        console.log(JSON.stringify(order));
        e.preventDefault();
    }
     const createObj =()=>{setOrder({...order,products})
        //setOrder({...order,status});
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
           {/* <FormGroup>
               <Label>Payment status</Label>
               <Input
               id="paymentStatus"
               name="paymentStatus"
               placeholder="enter here"
               type="boolean" style={{width: 200}} 
               onChange={(e)=>{setOrder({...order, paymentStatus: e.target.value})}}
               />
           </FormGroup> */}
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
        onChange={(e)=>{setOrder({...order, paymentStatus: e.target.checked})}}
        //onChange={(e)=>{setOrder({...order, paymentStatus: e.target.checked})}}
        //paymentStatus={status}
      />
           </FormGroup>
      

          
           <Container className="text-center">
               <Button type='submit' onClick={createObj} color="success">SUBMIT</Button>
           </Container>    
       </Form>
       </div>
    )
}

export default Form1
