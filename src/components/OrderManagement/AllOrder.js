import React from 'react'
import { useState,useEffect } from 'react'
import Order from "./Order";
import { Row } from 'reactstrap'
import base_url from './Api';
import axios from 'axios';

const AllOrder = () => {

    useEffect(()=>{
            document.title="view order";
            getAllOrder();
    },[]);

    const getAllOrder=()=>{axios.get(`${base_url}/items`).then(
        (response)=>{
            console.log(response.data);
            setOrder(response.data);
    },
    
        (error)=>{
            console.log(error);
        })};

    const [orders, setOrder] = useState([
        {nameCustomer: "Danish",shippingAddress: "Salam nagar, motihari",
                      billingAddress: "Salam nagar, motihari",paymentStatus: "UPI",products: "P1,P2"},
        {nameCustomer: "Danish",shippingAddress: "Salam nagar, motihari",
                      billingAddress: "Salam nagar, motihari",paymentStatus: "UPI",products: "P1,P2"},
        {nameCustomer: "Danish",shippingAddress: "Salam nagar, motihari",
                      billingAddress: "Salam nagar, motihari",paymentStatus: "UPI",products: "P1,P2"},              
    ])

    return (
        <div><Row>
            {orders.length>0? orders.map((o)=>

               <Order order={o} />

            ) : "no Orders"}
            </Row>
        </div>
    )
}

export default AllOrder
