import React from 'react'
import { useState } from 'react';
import { Card,Row,Col,CardHeader,CardTitle,Button,CardImg } from 'reactstrap';

const Product = ({childToParent}) => {

    const [createP, setCreateP]=useState([]);

    const [product,setProduct]= useState(
            [{        "id": "product-2","name": "A12","price": 119.0,"imageUrl": "https://via.placeholder.com/500", "descId": "dsc-2",
        "categoryId": ["electronics","mobile"]}
        ,    {        "id": "product-3",        "name": "K12",        "price": 119.0,        "imageUrl": "https://via.placeholder.com/500",        "descId": "dsc-3",        "categoryId": [            "electronics"        ]    },    {        "id": "product-1",        "name": "A12",        "price": 119.0,        "imageUrl": "https://via.placeholder.com/500",        "descId": "mobile phone with good features",        "categoryId": [            "electronics",            "mobile"        ]    }]
        
    );
      
      const addP=(o)=>{
       
          createP.push(o);
          childToParent(createP);
        
        
        //console.log("hello",createP);
        console.log("hello",createP);
      };


    return (
        <>
        <Row>
                {product.map((o)=>(
                    
       
           <Col>          
  <Card >
  {/* <CardImg
      alt="Card image cap"
      src="https://picsum.photos/100/100"
      top
      width="100%"
    /> */}
  <CardHeader className="text-center">Product ID: {o.id}</CardHeader>
  <CardTitle >NAME: {o.name}</CardTitle>
  <CardTitle >Email ID: {o.price}</CardTitle>
    <CardTitle >MOBILE NO: {o.descId}</CardTitle>
    {/* <CardTitle >SHIPPING ADDRESS: {o.categoryId}</CardTitle> */}
    {o.categoryId.map((m)=>(
        <CardTitle>categoryyy:{m}</CardTitle>
    ))}
    <Button onClick={()=>addP(o)} color="primary" >ADD</Button>
  </Card>
  
  </Col>
  
))}
</Row> 
  </>
    )
}

export default Product
