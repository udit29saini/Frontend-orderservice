import React from 'react'
import { useState,useEffect } from 'react';
import { render } from 'react-dom';
import { renderIntoDocument } from 'react-dom/test-utils';

import { Card,Row,Col,CardHeader,CardTitle,Button,CardImg,Table, Container } from 'reactstrap';
import AddModal from './AddModal';
import AddOrderForm from './AddOrderForm';
import EditModal from './EditModal';
import './product.css'
import _, { sortedUniq } from "lodash" ;
import axios from "axios";
import ReactPaginate from 'react-paginate';
import Cart from './Cart'
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

    const postData = () => {
      axios.post(`http://localhost:8091/cart/cart`, createP).then(
          (response) => {
              console.log("success", response);
              //console.log(orders);
          },
          (error) => {
              console.log(error);
          })
    };


    
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
        const newP = createP.filter(e=> e.id !== o.id);
        var element = createP.find(e=>e.id==o.id);
        if(element==null)
        {
          element=o;
          setCount(o.qty)
        }
        else {
          element.qty=element.qty+1;
          setCount(element.qty)
        }
        console.log(element);
        setCreateP([...newP,element]);
        
        //childToParent(createP);
        
    };

    const deleteP=(o)=>{
      const newP = createP.filter(e=> o.id !== e.id);
      var element = createP.find(e=>e.id==o.id);
      element.qty--;
      setCount(element.qty)
      setCreateP([...newP,element]);
      //childToParent(createP);
      
      };

      const sendP=()=>{
        childToParent(createP)
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
          qty:1
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
              <Button  className="submitbutton" onClick={postData}>Show Cart</Button>
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
                        Number Of {o.name} in cart={count}
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
