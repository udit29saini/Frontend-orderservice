import React from 'react'
import { Form,FormGroup,Label,Input,Container,Button, Row, Col } from 'reactstrap'
import { useState,useEffect } from 'react'
import axios from 'axios';
import Order from "./Order";
import base_url from './Api';
import AllOrder from './AllOrder';
import Footer1 from './Footer1';
import pexel from "./pexels-jess-bailey-designs-743986.jpg"
import "./queryOrder.css"

const QueryOrder = () => {
  useEffect(()=>{document.title="query order"; getAllOrder();},[]);

    const [qOrder, qsetOrder] =  useState({});
    const [orders, setOrder]=useState([]);
    const [allorders, setAllOrder] = useState([])

    const handleForm=(e)=>{
        
        console.log(qOrder);
        e.preventDefault();
    }

    const getQuery=()=>{getSearch();}

    const getSearch = async()=>{
      try {
        let url = `http://localhost:8091/order/query-criteria/${qOrder.select}/${qOrder.criteria}`;
        
        const res = await fetch(url);
        const data = await res.json();
       // console.log("helloe",data);
        setOrder(data);
        console.log("ord",orders);
        //alert("order fetched")
      } catch (error) {
        alert("Not found")
        console.log(error);
      }
    };


   const getAllOrder = async()=>{
       try {
         let url = `http://localhost:8091/order/getorder`;
         
         const res = await fetch(url);
         const data = await res.json();
         setAllOrder(data);
         //console.log("orders",allorders);
       } catch (error) {
         console.log(error);
       }
     };

    return (
    <div style={{backgroundImage: `url(${pexel})`}}>
      <Form  onSubmit={handleForm}>
        <div className="border form">
        <Row>
          <Col className="col1"> <h2>Filter:</h2></Col>
          <Col>
          <FormGroup >
            <Label for="exampleSelect"></Label>
            <Input
              className="input1" 
              id="exampleSelect"
              name="select"
              type="select"
              onChange={(e)=>{qsetOrder({...qOrder,select: e.target.value})}}
              >
              <option >
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
  </Col>
  <Col>
  <FormGroup className="">
  <Label for="criteria">

  </Label>
  <Input
  required
  className="input2"
  id="criteria"
  name="criteria"
  placeholder= "Query criteria"
  type="text"
  onChange={(e)=>{qsetOrder({...qOrder,criteria: e.target.value})}}
  />
    </FormGroup>
    </Col>
    <Col className="col2">
    <Container className="text-center">
            <Button type='submit' onClick={getQuery} color="success">SEARCH</Button>
        </Container>
        </Col>
        </Row>
        </div>
    </Form>
    
    <div>
      <Row className="roworder">
        
        {orders.length>0? orders.map((o)=>
            
          
            <Order key={o.orderId} order={o} />

        ) : allorders.map((o)=> <Order key={o.orderId} order={o} />) 
        
        }
        </Row>
        
    </div>
    
        {/* <Footer1 /> */}
    </div>
    )
}

export default QueryOrder
