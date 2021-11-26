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
<<<<<<< HEAD
    const [count, setCount]=useState(0);
   
=======
    
    const [count, setCount] = useState([]);


>>>>>>> b51d8da7d0002c34bb8e3883f475e035d84fb250
    const openForm = () => {
      renderIntoDocument(
        <AddModal pro={createP} />
      )
    }
    
    const [paginatedProduct,setpaginatedPproduct]= useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const userPerPage = 3;     
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
        setCount(data);
        
        setpaginatedPproduct(_(data).slice(0).take(pageSize).value()) ;
        console.log("ordes", product);
      } catch (error) {
        console.log(error);
      }      
    };
      
      const addP=(o)=>{
       
          //createP.push(o)
          setCreateP([...createP,o]);
          //childToParent(createP);
          
      };

      const deleteP=(o)=>{
        const newP = createP.filter(e=> o.id !== e.id);
       setCreateP(newP);
       //childToParent(createP);
        
        };

        const sendP=()=>{
          childToParent(createP)
        }

        const countP=(o)=>{
<<<<<<< HEAD
          
          // createP.map(item=>{
          //   if(item.id===o.id)
          //   {
          //      count++;
          //   }
            
          //   })
          //   return count;

=======
          let count=0;
          createP.map(item=>{
            if(item.id===o.id)
            {
               count++;
            }
            })
            return count;
>>>>>>> b51d8da7d0002c34bb8e3883f475e035d84fb250
        }


    const handlePageClick = ({ selected }) => {
      setPageNumber(selected);
    };

    return (
<<<<<<< HEAD
        <Container className="main">
          <h1 className="text-center">ADD PRODDUCT</h1>
       <Table striped bordered hover style={{textAlign: "center"}}>
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
                        //  product.map(o =>
                        product.length > 0 ? product.slice(pagesVisited, pagesVisited + userPerPage).map((o) =>
                             <tr key={o.id}>
                                 <td><img src="https://picsum.photos/200" className="img-responsive"/></td>
                                 <td>{o.id}</td>
                                 <td>{o.name}</td>
                                 <td>₹. {o.price}</td>
                                 <td>{o.categoryId[0]}</td>
                                 <td>
                                 <Button onClick={()=>addP(o)} color="primary" >ADD{count}</Button>
                                 </td>
                                 <td><Button color="danger" onClick={()=>deleteP(o)}>Delete</Button></td>
                                 <td>{()=>countP(o)}{count}</td>
                                 
                             </tr>
                         ):
                         <div>
                {/* <h1 className='text-center'></h1>  */}
=======
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
          
            <Table className="table">
              <thead>
                <tr>
                  <th >Image</th>
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
                //  product.map(o =>
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
                  <div>
        {/* <h1 className='text-center'></h1>  */}
>>>>>>> b51d8da7d0002c34bb8e3883f475e035d84fb250
              </div>
                     }
                     </tbody>
                 </Table>
<<<<<<< HEAD
                 <Container className="text-center button">
                 <Button  color="success" onClick={openForm}>NEXT</Button>
=======
                 <Container style={{marginBottom:10}} className="text-center">
                 
>>>>>>> b51d8da7d0002c34bb8e3883f475e035d84fb250
                 </Container>
                 
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
                   >

                   </ReactPaginate>
                 </div>
                 </div>
    )
}

export default Product
