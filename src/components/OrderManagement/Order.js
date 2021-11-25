  import React from 'react'
  import { Card, Col, CardTitle, Button, Modal, CardHeader, Row, Container } from 'reactstrap'
  import 'bootstrap/dist/css/bootstrap.min.css';
  import AddOrder from './AddOrder';
  import AddModal from './AddModal';
  import { render } from '@testing-library/react';
  import EditModal from './EditModal';
  import "./order.css";
  const Order = (props) => {
    const editB = () => {
      console.log("order", props.order)
      render(
        <EditModal />
      )
    }

    return (
        <Card className="cardClass">
          
          <CardHeader className="text-center">Order ID: {props.order.orderId}</CardHeader>
          <Row>
            <Col sm={4}>
              <h3>Personal Details:</h3>
              <CardTitle >NAME: {props.order.nameCustomer}</CardTitle>
              <CardTitle >Email ID: {props.order.email}</CardTitle>
              <CardTitle >MOBILE NO: {props.order.mobileNumber}</CardTitle>
            </Col>
            <Col sm={4}>
              <h3>ADDRESS:</h3>
              <CardTitle >SHIPPING ADDRESS: {props.order.shippingAddress}</CardTitle>
              <CardTitle >BILLING ADDRESS: {props.order.billingAddress}</CardTitle>
              <CardTitle >order date: {props.order.orderDate}</CardTitle>
            </Col>
            <Col sm={3}>
              <h3>Payment Information:</h3>
              <CardTitle >PAYMENT STATUS: {props.order.paymentStatus.toString()}</CardTitle>
              <CardTitle >Total cost: {props.order.orderCost}</CardTitle>
            </Col>
            <Col sm={1}>
              <Row style={{ marginTop: 25, marginBottom: 20 }}>
                <Button color="primary" onClick={editB} >UPDATE</Button>
              </Row>
              <Row>
                <Button color="warning">Track Order</Button>
              </Row>
            </Col>
          </Row>
          <Container className="text-center">


          </Container>

        </Card>
    )
  }

  export default Order
