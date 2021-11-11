import React from 'react'
import { Form,FormGroup,Label,Input,Container,Button, Row } from 'reactstrap'
import { useState,useEffect } from 'react'
import axios from 'axios';
import Order from "./Order";
import base_url from './Api';

const QueryOrder = () => {
    const [qOrder, qsetOrder] =  useState({});
    const [orders, setOrder]=useState([]);

    const handleForm=(e)=>{
        console.log(qOrder);
        e.preventDefault();
    }
    const getSearch = async()=>{
      try {
        let url = `http://localhost:9992/order/query-criteria/${qOrder.select}/${qOrder.criteria}`;
        
        const res = await fetch(url);
        const data = await res.json();
       // console.log("helloe",data);
        setOrder(data);
        console.log("orders",orders);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(()=>{
        document.title="query order";
        //queryOrder();
        getSearch();
    },[]);

    // const queryOrder=()=>{axios.get(`http://localhost:9992/order/query-criteria/Payment/false`).then(
    //     (response)=>{
    //         const c = [response.data];
    //         console.log("hffh",c);
    //         setOrder(c);

    //     },
    //     (error)=>{console.log(error);
    //     })};

        



    return (
        <div>
        <Form onSubmit={handleForm}>
        <FormGroup>
    <Label for="exampleSelect">
      Select
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
      onChange={(e)=>{qsetOrder({...qOrder,select: e.target.value})}}
    >
      <option>
        --SELECT--
      </option>
      <option>
        Billing_Address
      </option>
      <option>
        Address
      </option>
      <option>
        Payment
      </option>
      <option>
        Name
      </option>

    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="criteria">
      Criteria
    </Label>
    <Input
      id="criteria"
      name="criteria"
      placeholder="Query criteria"
      type="text"
      onChange={(e)=>{qsetOrder({...qOrder,criteria: e.target.value})}}
    />
        </FormGroup>
        <Container className="text-center">
               <Button type='submit' onClick={getSearch} color="success">SUBMIT</Button>
           </Container>
        </Form>
        
        <div><Row>
            {/* <h1>hello world</h1> */}
            
            {orders.length>0? orders.map((o)=>
               
             
               <Order key={o.orderId} order={o} />

            ) : <div><br /> <h1 className='text-center'> No Orders</h1> </ div>}
            </Row>
        </div>
        
            
        </div>
    )
}

export default QueryOrder
