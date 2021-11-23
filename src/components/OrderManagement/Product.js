import React from 'react'
import { useState,useEffect } from 'react';
import { Card,Row,Col,CardHeader,CardTitle,Button,CardImg,Table, Container } from 'reactstrap';
import './product.css'

const Product = ({childToParent}) => {

    const [createP, setCreateP]=useState([]);
    const [product,setProduct]= useState([]);

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
                         product.map(o =>
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
                         )
                     }
                     </tbody>
                 </Table>
                 </Container>
    )
}

export default Product
