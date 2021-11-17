import React from 'react'
import { useState,useEffect } from 'react'
import Order from "./Order";
import { Col, Row } from 'reactstrap'
import base_url from './Api';
import axios from 'axios';

const AllOrder = () => {

    const [orders, setOrder] = useState([])

     useEffect(()=>{
        document.title="view order";
        getAllOrder();
                },[]);

    const getAllOrder = async()=>{
        try {
          let url = `http://localhost:9992/order/getorder`;
          
          const res = await fetch(url);
          const data = await res.json();
          setOrder(data);
          console.log("orders",orders);
        } catch (error) {
          console.log(error);
        }
      };

        console.log("state",orders);

    return (
      <>
      <div>
        <Row>
          <Col>
          
          </Col>
        </Row>
      </div>
        <div><Row >
            
            {orders.length>0? orders.map((o)=>
               
               <Order key={o.orderId} order={o} />

            ) : <div><br /> <h1 className='text-center'> No Orders</h1> </ div>}
            </Row> 
        </div>
        </>
    )
}

export default AllOrder
