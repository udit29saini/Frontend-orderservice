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
    console.log("order123", props.order)
    render(
      <EditModal oId={props.order.orderId} />
    )
  }

  return (

      // <Card className="cardClass">
      //   <CardHeader className="abc">ORDER ID: {props.order.orderId}</CardHeader>
      //   <Row className="rows">
      //     <Col sm={4} className="cols1">
      //       <h3 className="head">PERSONLA DETAILS:</h3>
      //       <CardTitle className="cardTitle">Name: {props.order.nameCustomer}</CardTitle>
      //       <CardTitle className="cardTitle">Email Id: {props.order.email}</CardTitle>
      //       <CardTitle className="cardTitle">Mobile No: {props.order.mobileNumber}</CardTitle>
      //     </Col>
      //     <Col sm={4} className="cols2">
      //       <h3 className="head">ADDRESS:</h3>
      //       <CardTitle className="cardTitle">Shipping Address: {props.order.shippingAddress}</CardTitle>
      //       <CardTitle className="cardTitle">Billing Address: {props.order.billingAddress}</CardTitle>
      //       <CardTitle className="cardTitle">Order Date: {props.order.orderDate}</CardTitle>
      //     </Col>
      //     <Col sm={3} className="cols3">
      //       <h3 className="head">PAYMENT INFO:</h3>
      //       {
      //         props.order.paymentStatus==true?
      //         <CardTitle className="cardTitle">Payment Status: Prepaid</CardTitle>:
      //         <CardTitle className="cardTitle">Payment Status: Postpaid</CardTitle>
      //       }
            
      //       <CardTitle >Total Cost: {props.order.orderCost}</CardTitle>
      //     </Col>
      //     <Col sm={1}>
      //       <Row className="buttonmargin">
      //         <Button color="primary" onClick={editB} >UPDATE</Button>
      //       </Row>
      //       <Row className="buttonmargin">
      //         <Button color="warning">Track Order</Button>
      //       </Row>
      //     </Col>
      //   </Row>
      //   <Container className="text-center">
      //   </Container>
      // </Card>
      
      // <div className="background">
      <Col>
        
        <div className="ui cards align center xyz">
          {
              <div className="card">
                <div className="content">
                  <a className="header">ORDER ID: {props.order.orderId}</a>
                  <div class="meta">
                    <span className="date">Name: {props.order.nameCustomer}</span>
                    <br/>
                    <span className="date">Email Id: {props.order.email}</span>
                    <br/>
                    <span className="date">Mobile No: {props.order.mobileNumber}</span>
                  </div>
                  <div className="description">
                  Shipping Address: {props.order.shippingAddress}
                  <br/>
                  Billing Address: {props.order.billingAddress}
                  <br/>
                  Order Date: {props.order.orderDate}
                  </div>
                </div>
                <div class="extra content">
                {props.order.paymentStatus==true?
                  <a>
               <CardTitle className="cardTitle">Payment Status: Prepaid</CardTitle>
                  </a>:
                  <a>
                  <CardTitle className="cardTitle">Payment Status: Postpaid</CardTitle>
                  </a>}
                </div>
                <div className="extra content">
                  <div className="ui two buttons">
                    <div className="positive ui button" onClick={editB} color="primary">UPDATE</div>
                    {/* <Button onClick={()=>addP(o)} color="primary" >ADD</Button> */}

                    <div className="negative ui button" >TRACK ORDER</div>
                    {/* <Button color="danger" onClick={()=>deleteP(o)}>Delete</Button> */}
                  </div>
                </div>
              </div>    
          }
          </div>
          </Col>
      
  )
}

export default Order
