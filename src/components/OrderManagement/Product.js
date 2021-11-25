import React from 'react'
import { useState,useEffect } from 'react';

import { Card,Row,Col,CardHeader,CardTitle,Button,CardImg,Table, Container } from 'reactstrap';
import './product.css'
import _ from "lodash" ;
import axios from "axios";
import ReactPaginate from 'react-paginate';

const pageSize = 3;

const Product = ({childToParent}) => {

    const [createP, setCreateP]=useState([]);
    const [product,setProduct]= useState([]);
    
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
        setpaginatedPproduct(_(data).slice(0).take(pageSize).value()) ;
        console.log("ordes", product);
      } catch (error) {
        console.log(error);
      }      
    };
      
      const addP=(o)=>{
       
          createP.push(o);
          childToParent(createP);
      };

      const deleteP=(o)=>{
        const newP = createP.filter(e=> o.id !== e.id);
       setCreateP(newP);
       childToParent(createP);
        
        };

    const handlePageClick = ({ selected }) => {
      setPageNumber(selected);
    };

    return (
        <Container style={{marginTop:15}}>
       <Table striped bordered hover style={{textAlign: "center"}}>
                     <thead>
                     <tr>
                         <th>Image</th>
                         <th>Product ID</th>
                         <th>Product Name</th>
                         <th>Price</th>
                         <th>Category</th>
                         <th></th>
                         <th></th> 
                     </tr>
                     </thead>
                     <tbody>
                     {
                        //  product.map(o =>
                        product.length > 0 ? product.slice(pagesVisited, pagesVisited + userPerPage).map((o) =>
                             <tr key={o.id}>
                                 <td><img src={o.imageUrl} className="img-responsive"/></td>
                                 <td>{o.id}</td>
                                 <td>{o.name}</td>
                                 <td>₹. {o.price}</td>
                                 <td>{o.categoryId[0]}</td>
                                 <td>
                                 <Button onClick={()=>addP(o)} color="primary" >ADD</Button>
                                     

                                 </td>
                                 <td><Button color="danger" onClick={()=>deleteP(o)}>Delete</Button></td>
                                 
                             </tr>
                         ):
                         <div>
                {/* <h1 className='text-center'></h1>  */}
              </div>
                     }
                     </tbody>
                 </Table>
                 <div>
                   <ReactPaginate
                   previousLabel={'Prev'}
                   nextLabel={'Next'}
                   breakLabel={'...'}
                   pageCount={pageCount}
                   marginPagesDisplayed={2}
                   pageRangeDisplayed={3}
                   onPageChange={handlePageClick}
                   containerClassName={'pagination justify-content-center'}
                   pageClassName={'page-item'}
                   pageLinkClassName={'page-link'}
                   previousClassName={'page-link'}
                   previousLinkClassName={'page-item'}
                   nextClassName={'page-link'}
                   nextLinkClassName={'page-item'}
                   breakClassName={'page-link'}
                   breakLinkClassName={'page-item'}
                   activeClassName={'active'}
                   >

                   </ReactPaginate>
                 </div>
                 {/* <nav className="d-flex justify-content-center">
                   <ul className="pagination">
                     {
                       pages.map((page) => (
                        <li className="page-link">{page}</li>
                        
                       ))
                     }                     
                   </ul>
                 </nav> */}
                 </Container>
                 
    )
}

export default Product
