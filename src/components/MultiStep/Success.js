import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Container, ListGroup,ListGroupItem } from 'reactstrap';
import {Button} from 'reactstrap';
import "../OrderManagement/addOrder.css"

const Success = (prop) => {

    console.log("obj",prop.obj);
    const postData = (data) => {
        console.log("finally",data);
        axios.post(`http://localhost:8091/order/createorder`, data).then(
            (response) => {
                console.log("success", response);
                //console.log(orders);
            },
            (error) => {
                console.log(error);
            })
    };

    const post =()=>{
        postData(prop.obj);
    }
    //console.log("fina prod",prop.Product)


      const back = (e) => {
        e.preventDefault();
        prop.prevStep();
      };
    
    return (
        <div className="bgcolor2">
            <h2 className="text-center">Review your order</h2>
            <div className="bgcolor1">
            <div className="revorder">
                <h5>Name:{prop.obj.nameCustomer}</h5>
                <h5>Phone Number:{prop.obj.mobileNumber}</h5>
                <h5>email:{prop.obj.email}</h5>
                <h5>Biiling Address:{prop.obj.billingAddress}</h5>
                <h5>Shipping Address:{prop.obj.shippingAddress}</h5>
                <h4>Payment Status:{ prop.obj.paymentStatus==true ?
                   <var> prepaid</var>  :
                    <span> Postpaid </span>
                }</h4>
                
                <h4>Products:</h4>{prop.obj.products.map((o)=>(

                   <ListGroup numbered className="prodtable">
            <ListGroupItem>
                 <span>Name:&nbsp;</span>{o.name} <span>&nbsp;&nbsp;&nbsp;Price: ₹</span>{o.price}<span>&nbsp;&nbsp;&nbsp;Category:</span>{o.categoryId}
            </ListGroupItem>
                </ListGroup>
                ))
            }
            </div>
            
           
            <Container className="btn text-center">
                <Button className="btn1" color="danger" onClick={back} >Edit</Button>
                <Button className="btn2" color="primary" onClick={post} >Place Your Order</Button>
            </Container>
            
            </div>
        </div>
    )
}

export default Success
