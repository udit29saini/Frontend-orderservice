import React, { useEffect } from 'react'
import { Container, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useState } from 'react';
import axios from 'axios';
import base_url from './Api';
import { Col, FormControl, Row, } from 'react-bootstrap';
import Product from './Product';
import ProductList from './ProductList';
import Footer1 from './Footer1';
import pexel from "./pexels-jess-bailey-designs-743986.jpg"

const AddOrder = () => {

    const [order, setOrder] = useState({});
    const [products,setProducts]=useState([]);
    const [createP, setCreateP]=useState({});
    //const [status, setPaymentStatus] = useState(false);

    useEffect(() => { document.title = "add order"; }, []);

    const postData = (data) => {
        axios.post(`http://localhost:8081/order/createorder`, data).then(
            (response) => {
                console.log("success", response);
                //console.log(orders);
            },
            (error) => {
                console.log(error);
            })
    };

    const hForm = (e) => {
        products.push(createP);
        alert("product added")
        console.log("hello",products);
        e.preventDefault();
    }

    const childToParent=(e)=>{
        console.log("fin array",products)
        setProducts(e);
         

}

    const handleForm = (e) => {

        postData(order);
        alert("order added")
        console.log(JSON.stringify(order));
        e.preventDefault();
    }

    const createObj = () => {
        setOrder({ ...order, products })
        setProducts([]);
    }


    return (
        <div style={{backgroundImage: `url(${pexel})`}}>
        <Row>
            
            <div className="border" style={{marginBottom:15}} >
       <Form  style={{marginLeft:100, marginTop:50}}  onSubmit={handleForm}>
       
       <FormGroup>
               <Label ><h3>Name:</h3></Label>
               <Input 
               required
               id="nameCustomer"
               name="nameCustomer"
               placeholder="enter here"
               type="text" style={{width: 400}}
               onChange={(e)=>{setOrder({...order,nameCustomer: e.target.value})}}
               />
           </FormGroup >
    
           <FormGroup>
               <Label><h4>SHIPPING ADDRESS:</h4></Label>
               <Input
               required
               id="	shipping address"
               name="shipping address"
               placeholder="enter here"
               type="text" style={{width: 800}} 
               onChange={(e)=>{setOrder({...order, billingAddress: e.target.value})}}
               />
           </FormGroup>
           <FormGroup>
               <Label><h4>BILLING ADDRESS:</h4></Label>
               <Input
               required
               id="shippingAddress"
               name="shippingAddress"
               placeholder="enter here"
               type="text" style={{width: 800}}
               onChange={(e)=>{setOrder({...order,shippingAddress: e.target.value})}}
               />
           </FormGroup> 
           
               <h4>Payment Type:</h4>        
           <FormGroup >
               <label><h5>Prepaid:</h5></label>
                <input
                style={{width: 30}}
                type="checkbox"
                name="subscription"
                value="true"
                 onChange={(e)=>{setOrder({...order, paymentStatus: e.target.value})}}
      /></FormGroup>
      
      <FormGroup >
               <label><h5>Postpaid:</h5></label>
                <input
                style={{width: 30}}
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
            
        <h1 className="text-center">ADD PRODUCT</h1>
        <div><Product childToParent={childToParent} /></div>


           </Row>
           
           {/* <Row>
           <div style={{marginTop:50}}>

           <Row>
            <Product childToParent={childToParent} />
           </Row>
           <Col>
               <div>
                   <h2>Cart</h2>
                   <h3>{products.map((p)=>(p.name))}</h3>

               </div>
               </Col>
           </div>
           

           </Row> */}
           {/* <div>
               <ProductList />
           </div> */}
           {/* <Footer1 /> */}
       </div>
    )
}

export default AddOrder
