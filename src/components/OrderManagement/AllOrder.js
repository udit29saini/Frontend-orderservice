import React from 'react'
import { useState,useEffect } from 'react'
import Order from "./Order";
import { Row } from 'reactstrap'
import base_url from './Api';
import axios from 'axios';

const AllOrder = () => {

    const [orders, setOrder] = useState([]
        // {nameCustomer: "Danish",shippingAddress: "Salam nagar, motihari",
        //               billingAddress: "Salam nagar, motihari",paymentStatus: "UPI",products: "P1,P2"},
        // {nameCustomer: "Danish",shippingAddress: "Salam nagar, motihari",
        //               billingAddress: "Salam nagar, motihari",paymentStatus: "UPI",products: "P1,P2"},
        // {nameCustomer: "Danish",shippingAddress: "Salam nagar, motihari",
        //               billingAddress: "Salam nagar, motihari",paymentStatus: "UPI",products: "P1,P2"},              
     )

     useEffect(()=>{
        document.title="view order";
        getAllOrder();
                },[]);

    const getAllOrder=()=>{axios.get(`${base_url}/getorder`).then(
        (response)=>{
            const b = [response.data];
            console.log("hhnh",b);
            setOrder(b);
            //console.log(orders);
    },
        (error)=>{
            console.log(error);
        })};

        console.log("state",orders);

    return (
        <div><Row>
            {/* <h1>hello world</h1> */}
            
            {orders.length>0? orders.map((o)=>
               
             
               <Order key={o.orderId} order={o} />

            ) : <div><br /> <h1 className='text-center'> No Orders</h1> </ div>}
            </Row>
        </div>
    )
}

export default AllOrder
