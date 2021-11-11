import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
// import "./App.css";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Row,Col,Cardbody,CardTitle,CardSubtitle,
  CardText,CardFooter,Button,Container, CardBody} from 'reactstrap'

// import AddContact from "./AddContact";
import ContactList from "./ContactList";
import OrderPage from  "./OrderManagement/OrderPage";
import NavBar from "./OrderManagement/NavBar";
import Nav1 from "./OrderManagement/Nav1";
import Order from "./OrderManagement/Order";
import AllOrder from "./OrderManagement/AllOrder";
import Form1 from "./OrderManagement/Form1";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import AddOrder from "./OrderManagement/AddOrder";
import QueryOrder from "./OrderManagement/QueryOrder";
import FormUpdate from "./OrderManagement/FormUpdate";


function App() {
  // const LOCAL_STORAGE_KEY = "contacts";
  // const [contacts, setContacts] = useState([]);

  // const addContactHandler = (contact) => {
  //   console.log(contact);
  //   setContacts([...contacts, { id: uuid(), ...contact }]);
  // };

  // const removeContactHandler = (id) => {
  //   const newContactList = contacts.filter((contact) => {
  //     return contact.id !== id;
  //   });

  //   setContacts(newContactList);
  // };

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div >
      <Nav1 />
     
        {/* <Header /> */}
          
  {/* <OrderPage addContactHandler={addContactHandler} />
  <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      <Router>
        <Switch>
          
           <Route exact path='/view-order'  > <AllOrder /></Route>
           <Route exact path='/add-order'  > <Form1 /></Route>
           <Route exact path='/query-Order'  > <QueryOrder /></Route>
           <Route exact path='/edit-Order'  > <FormUpdate /></Route>
           

        
        
         </Switch>
        
    

      </Router>
    </div>
  );
}

export default App;
