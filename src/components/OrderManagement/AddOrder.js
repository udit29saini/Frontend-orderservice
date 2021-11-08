import React from 'react'
import Form1 from './Form1'
import { useState } from 'react'
import { Modal,Button,ModalBody,ModalFooter,ModalHeader } from 'reactstrap'

const AddOrder = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
//         <div>
//                 <Modal show={true} >
//     <Modal.Header>EDIT ORDER PAGE</Modal.Header>
//     <Modal.Body>this is body</Modal.Body>
//     <Modal.Footer>thank you</Modal.Footer>
//   </Modal>
//         </div>
<>
<Button variant="primary" onClick={handleShow}>
  Launch demo modal
</Button>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
  </Modal.Header>
  <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={handleClose}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>
</>
    )
}

export default AddOrder
