import React, { useEffect } from 'react'
import { Container, Form, FormGroup, Input, Label,Button } from 'reactstrap'
import { useState } from 'react';
import axios from 'axios';
import base_url from './Api';
import { Col, FormControl, Row, } from 'react-bootstrap';
import Product from './Product';

const AddOrder = () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

     const [order, setOrder] = useState({});

     useEffect(()=>{document.title="add order"; },[]);

     const [products,setProducts]=useState([]);

    const [createP, setCreateP]=useState({});

      const postData=(data)=>{axios.post(`${base_url}/createorder`, data).then(
        (response)=>{
            console.log("success",response);
            //console.log(orders);
    },
        (error)=>{
            console.log(error);
        })};

      const [status, setPaymentStatus]=useState(false);

      const hForm=(e)=>{
        products.push(createP);
        alert("product added")
        console.log("hello",products);
        e.preventDefault();
        

    }

    const childToParent=(e)=>{
        setProducts(e);
         console.log("fin array",products)

}



    const handleForm=(e)=>{

        postData(order);
        alert("order added")
        console.log(JSON.stringify(order));
        e.preventDefault();
    }
    
     const createObj =()=>{setOrder({...order,products})
                            setProducts([]);
    }


    return (
        <div>
        <Row>
            <Col className="ps-5" >
            <div className="border" >
       <Form  onSubmit={handleForm}>
       <Row  className="mt-5">
       <Col ><FormGroup>
               <Label >Name</Label>
               <Input 
               required
               id="nameCustomer"
               name="nameCustomer"
               placeholder="enter here"
               type="text" style={{width: 200}}
               onChange={(e)=>{setOrder({...order,nameCustomer: e.target.value})}}
               />
           </FormGroup ></Col>
    
           <Col className="ms-7"><FormGroup>
               <Label>SHIPPING ADDRESS</Label>
               <Input
               id="	shipping address"
               name="shipping address"
               placeholder="enter here"
               type="text" style={{width: 200}} 
               onChange={(e)=>{setOrder({...order, billingAddress: e.target.value})}}
               />
           </FormGroup></Col>
           <Col><FormGroup>
               <Label>BILLING ADDRESS</Label>
               <Input
               id="shippingAddress"
               name="shippingAddress"
               placeholder="enter here"
               type="text" style={{width: 200}}
               onChange={(e)=>{setOrder({...order,shippingAddress: e.target.value})}}
               />
           </FormGroup></Col>         
           <Col className="text-center mb-2" sm="15"><FormGroup >
               <label>Payment Status</label>
                <input
                style={{width: 30}}
            
                type="checkbox"
                name="subscription"
                 onChange={(e)=>{setOrder({...order, paymentStatus: e.target.checked})}}
      /></FormGroup></Col>
      <br /><br />
                <Container className="text-center">
               <Button type='submit' onClick={createObj} color="success">SUBMIT</Button>
               <Button type='reset' color="warning " >Clear</Button>
           </Container> 
           
           </Row>
           </Form>
           </div>
            </Col>



            {/* <Col className="mt-5">
           <div className="border" >
        <Form onSubmit={hForm}>
            <Row>
          <Col> <FormGroup>
               <Label>Product Name</Label>
               <Input
               id="name"
               name="name"
               placeholder="enter here"
               type="text" style={{width: 200}} 
               onChange={(e)=>{setCreateP({...createP, name: e.target.value})}}
               />
           </FormGroup></Col>
          <Col > <FormGroup>
               <Label>Dimension</Label>
               <Input
               id="dimension"
               name="dimension"
               placeholder="enter here"
               type="text" style={{width: 200}} 
               onChange={(e)=>{setCreateP({...createP, dimension: e.target.value})}}
               />
           </FormGroup></Col>
          <Col > <FormGroup>
               <Label>product Description</Label>
               <Input
               id="	email"
               name="email"
               placeholder="enter here"
               type="text" style={{width: 200}} 
               onChange={(e)=>{setCreateP({...createP, productDescription: e.target.value})}}
               />
           </FormGroup></Col>
          <Col > <FormGroup >
               <Label>product Price</Label>
               <Input
               id="	productPrice"
               name="productPrice"
               placeholder="enter here"
               type="text" style={{width: 200}} 
               onChange={(e)=>{setCreateP({...createP, productPrice: e.target.value})}}
               />
           </FormGroup></Col>

           <Col className="mt-5 me-3">
           <Container className="text-center" >
               <Button type='submit' color="success">SUBMIT</Button>
               <Button type='reset' color="warning ml-2" >Clear</Button>
           </Container> 
           </Col>

          <Col > <FormGroup>
               <Label>weight</Label>
               <Input
               id="weight"
               name="weight"
               placeholder="enter here"
               type="text" style={{width: 200}} 
               onChange={(e)=>{setCreateP({...createP, weight: e.target.value})}}
               />
           </FormGroup></Col>
       
           </Row>
           </Form>

           </ div>

           </Col> */}
           </Row>
           <div>
           <Row>
           {/* <Product /> */}
           <Product childToParent={childToParent} />
           </Row>
           </div>
       </div>
    )
}

export default AddOrder
