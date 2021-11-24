import React from 'react'
import "./AllOrder.css";
import { useState, useEffect } from 'react'
import Order from "./Order";
import { Col, Row } from 'reactstrap'
import base_url from './Api';
import axios from 'axios';
import ReactPaginate from "react-paginate";
import "./AllOrder.css";
import Footer1 from './Footer1';
import pexel from "./pexels-jess-bailey-designs-743986.jpg"

const AllOrder = () => {

  const [orders, setOrder] = useState([])
  //const [users, setUsers] = useState(JsonData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    document.title = "view order";
    getAllOrder();
  }, []);

  const getAllOrder = async () => {
    try {
      let url = `http://localhost:8091/order/getorder`;

      const res = await fetch(url);
      const data = await res.json();
      setOrder(data);
      console.log("orders", orders);
    } catch (error) {
      console.log(error);
    }
  };

  const pageCount = Math.ceil(orders.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  console.log("state", orders);

return (
      <div className="fullpage">
        <div className="orders">
          <Row className="roworder">
            {
              orders.length > 0 ? orders.slice(pagesVisited, pagesVisited + usersPerPage).map((o) =>
              <Order key={o.orderId} order={o} className="order"/>) : 
              //No order case
              <div>
                <h1 className='text-center'> No Orders</h1> 
              </div>
            }
          </Row>
        </div>   
        <div className="paginationclass">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
      </div>
    </div>
    )
}
export default AllOrder
