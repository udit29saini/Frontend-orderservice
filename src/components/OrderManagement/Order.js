import React from 'react'
import { Card,Col,CardTitle,Button, Modal, CardHeader, } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddOrder from './AddOrder';
import AddModal from './AddModal';
import { render } from '@testing-library/react';
import EditModal from './EditModal';

const Order = ( props ) => {


   const editB=()=>{console.log("order",props.order)
  
   render(
     
     <EditModal />
     
   )
  
  
  }

    return (
      <>
            <Col sm="4">
  <Card body  color = 'warning' >
  <br />
  <CardHeader className="text-center">Order ID: {props.order.orderId}</CardHeader>
  <CardTitle >NAME: {props.order.nameCustomer}</CardTitle>
  <CardTitle >Email ID: {props.order.email}</CardTitle>
    <CardTitle >MOBILE NO: {props.order.mobileNumber}</CardTitle>
    <CardTitle >SHIPPING ADDRESS: {props.order.shippingAddress}</CardTitle>
    <CardTitle >BILLING ADDRESS: {props.order.billingAddress}</CardTitle>
    <CardTitle >PAYMENT STATUS: {props.order.paymentStatus.toString()}</CardTitle>
    <CardTitle >order date: {props.order.orderDate}</CardTitle>
    <CardTitle >order cost: {props.order.orderCost}</CardTitle>

    <Button  color="primary" onClick={editB} >EDIT</Button>


  </Card>
  </Col>

  </>
    )
}

export default Order
