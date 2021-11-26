import React from 'react'
import { Container, Form, FormGroup, Input, Label,Button,Modal } from 'react-bootstrap'
import { useState } from 'react';
import AddOrderForm from './AddOrderForm';

const AddModal = (props) => {
    console.log("modalPro",props.pro);

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
                    <Modal.Title>Personal Information</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                    <AddOrderForm prod={props.pro} />
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
