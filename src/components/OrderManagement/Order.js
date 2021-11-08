import React from 'react'
import { Card,Col,CardTitle,Button, Modal, } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form1 from './Form1';

const Order = ({ order }) => {





    return (
      <div>
            <Col sm="4">
  <Card body >
  

    <CardTitle >NAME: {order.nameCustomer}</CardTitle>
    <CardTitle >SHIPPING ADDRESS: {order.shippingAddress}</CardTitle>
    <CardTitle >BILLING ADDRESS: {order.billingAddress}</CardTitle>
    <CardTitle >PAYMENT STATUS: {order.paymentStatus}</CardTitle>
    <CardTitle >PRODUCTS: {order.products} </CardTitle>
    <Button  color="primary">EDIT</Button>


  </Card>
  </Col>

  <Modal show={true} >
      <Modal.Header>EDIT ORDER PAGE</Modal.Header>
      <Modal.Body>this is body</Modal.Body>
      <Modal.Footer>thank you</Modal.Footer>
    </Modal>

  </div>
    )
}

export default Order
