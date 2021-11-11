import React from 'react'
import { Container, Form, FormGroup, Input, Label,Button,Modal } from 'react-bootstrap'
import { useState } from 'react';
import FormUpdate from './FormUpdate';

const EditModal = () => {

    const [order, setOrder] = useState({});

   const handleForm=(e)=>{

       console.log(order);
       e.preventDefault();
   }

   return (
       <div >
           <Modal show={true}>
               <Modal.Header closeButton>
                    <Modal.Title>Edit Order Modal</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                    <FormUpdate />
               </Modal.Body>
               
           </Modal>
      </div>
   )
}

export default EditModal
