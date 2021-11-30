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
import ReactPaginate from 'react-paginate';

const pageSize = 3;

const QueryOrder = () => {
  useEffect(()=>{document.title="query order"; getAllOrder();},[]);

    const [qOrder, qsetOrder] =  useState({});
    const [orders, setOrder]=useState([]);
    const [allorders, setAllOrder] = useState([])
    const [pageNumber, setPageNumber] = useState(0);

    const userPerPage = 4;     
    const pageCount = Math.ceil(orders.length / userPerPage);
    const pagesVisited = pageNumber * userPerPage;

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

     const handlePageClick = ({ selected }) => {
      setPageNumber(selected);
    };


    return (
    <div>
      <Form  onSubmit={handleForm}>
        <div className="queryOrder">
            <div className="filter"><h2>Filter:</h2></div>
            <div className="formGroup">
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
                <option>
                  Date
                </option>

              </Input>
            </div>  
            <div className="formGroup1">
              <Input
              required
              className="input2"
              id="criteria"
              name="criteria"
              placeholder= "Query criteria"
              type="text"
              onChange={(e)=>{qsetOrder({...qOrder,criteria: e.target.value})}}
              />
            </div>
            <div className="filterButton">
            <Button type='submit' onClick={getQuery} color="success">SEARCH</Button>
            </div>
                    
        </div>
      </Form>        
      <div className="filterOrders">  
      {/* products.slice(pagesVisited, pagesVisited + userPerPage).map */}
        {orders.length>0? orders.slice(pagesVisited, pagesVisited + userPerPage).map((o)=>
            <Order key={o.orderId} order={o} />
        ) : allorders.map((o)=> <Order key={o.orderId} order={o} />) 
        }
      </div>    
      <div className="paginationclass1">
          <ReactPaginate className="paginatebuttons"
          previousLabel="Prev"
          nextLabel={'Next'}
          breakLabe={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="boxes"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-link"
          previousLinkClassName="page-item"
          nextClassName="page-link"
          nextLinkClassName="page-item"
          breakClassName="page-link"
          breakLinkClassName="page-item"
          activeClassName="active"
          ></ReactPaginate>
        </div>
    </div>
    )
}

export default QueryOrder
