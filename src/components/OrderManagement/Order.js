import React from 'react'
import { Card,Col,CardTitle,Button, Modal, } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form1 from './Form1';

const Order = ( props ) => {



 // console.log("order", props.order)
//console.log(props.order.products.length);
    return (
      <>
            <Col sm="4">
  <Card body >
  
  <CardTitle >Order ID: {props.order.orderId}</CardTitle>
  <CardTitle >Email ID: {props.order.email}</CardTitle>
    <CardTitle >NAME: {props.order.nameCustomer}</CardTitle>
    <CardTitle >MOBILE NO: {props.order.mobileNumber}</CardTitle>
    <CardTitle >SHIPPING ADDRESS: {props.order.shippingAddress}</CardTitle>
    <CardTitle >BILLING ADDRESS: {props.order.billingAddress}</CardTitle>
    <CardTitle >PAYMENT STATUS: {props.order.paymentStatus}</CardTitle>
    <CardTitle >order date: {props.order.orderDate}</CardTitle>
    <CardTitle >order cost: {props.order.orderCost}</CardTitle>
    {/* <CardTitle >PRODUCTS: {props.order.products} </CardTitle> */}
    {/* {props.order.products.length>0 ? props.order.products.map((product)=>
  { return <CardTitle >PRODUCTS: {product.productId}  </CardTitle>}):"Hello"
  
  } */}
    <Button  color="primary" >EDIT</Button>


  </Card>
  </Col>

  {/* <Modal show={true} >
      <Modal.Header>EDIT ORDER PAGE</Modal.Header>
      <Modal.Body>this is body</Modal.Body>
      <Modal.Footer>thank you</Modal.Footer>
    </Modal> */}

  </>
    )
}

export default Order
