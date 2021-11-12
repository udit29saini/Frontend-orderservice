import React from 'react'
import { Container, Form, FormGroup, Input, Label,Button,Modal } from 'react-bootstrap'
import { useState } from 'react';
import FormUpdate from './FormUpdate';

const EditModal = () => {

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
                    <Modal.Title>Edit Order</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                    <FormUpdate />
               </Modal.Body>
               <Modal.Footer >
                   <Button variant="secondary" onClick={handleClose}>
                       Close
                   </Button>
               </Modal.Footer>
           </Modal>
      </div>
   )
}

export default EditModal
