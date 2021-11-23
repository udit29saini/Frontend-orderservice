import React from 'react'
import { Form,FormGroup,Label,Input,Container,Button, Row, Col } from 'reactstrap'
import { useState,useEffect } from 'react'
import axios from 'axios';
import Order from "./Order";
import base_url from './Api';
import AllOrder from './AllOrder';
import Footer1 from './Footer1';
import pexel from "./pexels-jess-bailey-designs-743986.jpg"

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
        let url = `http://localhost:8081/order/query-criteria/${qOrder.select}/${qOrder.criteria}`;
        
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

    

    // useEffect(()=>{
    //    document.title="view order";
       
    //            },[]);

   const getAllOrder = async()=>{
       try {
         let url = `http://localhost:8081/order/getorder`;
         
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
          <div className="border" style={{marginBottom:50, marginTop:50}}>
          <Row>
            <Col style={{marginLeft:240, marginTop:20}}> <h2>Filter:</h2></Col>
            <Col>
        <FormGroup >
    <Label for="exampleSelect">
    </Label>
    <Input
    style={{width: 300,height:40, marginRight:50}} 
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
    style={{width: 300,height:40, marginRight:100}} 
      id="criteria"
      name="criteria"
      placeholder= "Query criteria"
      type="text"
      onChange={(e)=>{qsetOrder({...qOrder,criteria: e.target.value})}}
    />
        </FormGroup>
        </Col>
        <Col style={{marginTop:20, marginRight:190}}>
        <Container className="text-center">
               <Button type='submit' onClick={getQuery} color="success">SEARCH</Button>
           </Container>
           </Col>
           </Row>
           </div>
        </Form>
        
        {/* <div><Row>
            
            {allorders.length>0? allorders.map((o)=>
               
             
               <Order key={o.orderId} order={o} />

            ) : <div><br /> <h1 className='text-center'> No Orders</h1> </ div>}
            </Row>
        </div> */}
        <div>
          <Row style={{marginTop:50,marginLeft:150,marginRight:150}}>
            
            {orders.length>0? orders.map((o)=>
               
             
               <Order key={o.orderId} order={o} />

            ) : allorders.map((o)=> <Order key={o.orderId} order={o} />)  }
            </Row>
           
        </div>
        
            {/* <Footer1 /> */}
        </div>
    )
}

export default QueryOrder
