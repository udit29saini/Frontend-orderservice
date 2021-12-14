import React from 'react'
import { Container, Form, FormGroup, Input, Label,Button,Modal,ListGroup,ListGroupItem } from 'react-bootstrap'
import { useState } from 'react';
import AddOrderForm from './AddOrderForm';
import Start from '../MultiStep/Start';

const ShowProduct = (prod) => {
    console.log("modalPro",prod.Pid);

    const [order, setOrder] = useState({});
    const[show , setShow] = useState(true)

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

   const handleForm=(e)=>{

       console.log(order);
       e.preventDefault();
   }

   return (
       <div >
           <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                    <Modal.Title>Order Management</Modal.Title>
               </Modal.Header>
               <Modal.Body>
            {
                prod.Pid.map((o)=>( 
               <ListGroup numbered>
            <ListGroupItem>
            <span>Name:&nbsp;</span>{o.name} <span>&nbsp;&nbsp;&nbsp;Price: ₹</span>{o.price}
            <span>&nbsp;&nbsp;&nbsp;Category:</span>{o.categoryId}
            </ListGroupItem>
                </ListGroup>
                ))}
               </Modal.Body>
               {/* <Modal.Footer>
                   <Button variant="secondary" OnClick={handleClose}>
                       Close
                   </Button>
                </Modal.Footer>  */}
           </Modal>
      </div>
   )
}

export default ShowProduct
