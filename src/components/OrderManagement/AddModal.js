import React from 'react'
import { Container, Form, FormGroup, Input, Label,Button,Modal } from 'react-bootstrap'
import { useState } from 'react';
import FormUpdate from './EditOrder';
import AddOrder from './AddOrder';

const AddModal = () => {

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
                    <Modal.Title>Add Order Modal</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                    <AddOrder />
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

export default AddModal
