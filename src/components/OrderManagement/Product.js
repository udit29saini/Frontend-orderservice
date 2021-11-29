import React from 'react'
import { useState,useEffect } from 'react';
import { render } from 'react-dom';
import { renderIntoDocument } from 'react-dom/test-utils';

import { Card,Row,Col,CardHeader,CardTitle,Button,CardImg,Table, Container } from 'reactstrap';
import AddModal from './AddModal';
import AddOrderForm from './AddOrderForm';
import EditModal from './EditModal';
import './product.css'
import _ from "lodash" ;
import axios from "axios";
import ReactPaginate from 'react-paginate';

const pageSize = 3;

const Product = ({childToParent}) => {
  
    const [createP, setCreateP]=useState([]);
    const [product,setProduct]= useState([]);
    const [count, setCount]=useState(0);
   
    const openForm = () => {
      renderIntoDocument(
        <AddModal pro={createP} />
      )
    }
    
    const [paginatedProduct,setpaginatedPproduct]= useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const userPerPage = 4;     
    const pageCount = Math.ceil(product.length / userPerPage);
    const pagesVisited = pageNumber * userPerPage;

    
    useEffect(() => {
      
      document.title = "view order";
      getAllProduct();
    }, []);

    const getAllProduct = async () => {
      try {
        let url = `http://localhost:9000/products/`;
  
        const res = await fetch(url);
        const data = await res.json();
        setProduct(data);
        //setCount(data);
        
        setpaginatedPproduct(_(data).slice(0).take(pageSize).value()) ;
        console.log("ordes", product);
      } catch (error) {
        console.log(error);
      }      
    };
      

    
    const addP=(o)=>{
      
        //createP.push(o)
        setCreateP([...createP,o]);
        o.qty++;
        //childToParent(createP);
        
    };

    const deleteP=(o)=>{
      const newP = createP.filter(e=> o.id !== e.id);
      setCreateP(newP);
      o.qty--;
      //childToParent(createP);
      
      };

      const sendP=()=>{
        childToParent(createP)
      }

      const countP=(o)=>{
        let count=0;
        createP.map(item=>{
          if(item.id===o.id)
          {
              count++;
          }
          })
          return count;
      }


    const handlePageClick = ({ selected }) => {
      setPageNumber(selected);
    };

    const modifiedArray = function(arr) {
      
      return arr.map(item => {
        return {
          id: item.id,
          categoryId: item.categoryId,
          descId: item.descId,
          imageUrl : item.imageUrl,
          name: item.name,
          price:item.price,
          qty:0
        }; 
      })  
    }

    const products=modifiedArray (product);
    return (
      <div>
        <div className="productContainer">
          <div className="addproductbutton">
            <div className="heading" >
              <h1>ADD PRODUCT</h1>
            </div>
            <div className="button">
              <Button  className="submitbutton" onClick={openForm}>Proceed Order</Button>
            </div>
          </div>

          <div className="cardClass">
          <div class="ui cards align center">
          {
              products.length > 0 ? products.slice(pagesVisited, pagesVisited + userPerPage).map((o) =>
                
                <div class="card">
                  <div class="image">
                    <img src="https://cdn0.wideopenpets.com/wp-content/uploads/2017/03/AdobeStock_83729458.jpeg"/>
                  </div>
                  <div class="content">
                    <a class="header">{o.name}</a>
                    <div class="meta">
                      <span class="date">{o.id}</span>
                    </div>
                    <div class="description">
                      {o.categoryId}
                    </div>
                  </div>
                  <div class="extra content">
                    <a>
                        ₹. {o.price}
                    </a>
                  </div>
                  <div class="extra content">
                    <a>
                        Number Of {o.name} in cart={o.qty}
                    </a>
                  </div>
                  <div class="extra content">
                    <div class="ui two buttons">
                      <div class="positive ui button" onClick={()=>addP(o)} color="primary">Add</div>
                      {/* <Button onClick={()=>addP(o)} color="primary" >ADD</Button> */}

                      <div class="negative ui button" onClick={()=>deleteP(o)}>Remove</div>
                      {/* <Button color="danger" onClick={()=>deleteP(o)}>Delete</Button> */}
                    </div>
                  </div>
                </div>    
              ):
              <div></div>
            }
          </div>  
          </div>
          {/* <Table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Add Product</th>
                <th>Remove Product</th>
                <th>count</th>
            </tr>
            </thead>
            <tbody>
            {
              product.length > 0 ? product.slice(pagesVisited, pagesVisited + userPerPage).map((o) =>
                <tr key={o.id}>
                    <td><img src="https://cdn0.wideopenpets.com/wp-content/uploads/2017/03/AdobeStock_83729458.jpeg" className="img-responsive"/></td>
                    <td>{o.id}</td>
                    <td>{o.name}</td>
                    <td>₹. {o.price}</td>
                    <td>{o.categoryId[0]}</td>
                    <td>
                      <Button onClick={()=>addP(o)} color="primary" >ADD</Button>
                    </td>
                    <td>
                      <Button color="danger" onClick={()=>deleteP(o)}>Delete</Button>
                    </td>
                    <td>0</td>
                </tr>
              ):
              <div></div>
            }
            </tbody>
          </Table> */}
          <Container style={{marginBottom:10}} className="text-center"></Container>            
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

export default Product
