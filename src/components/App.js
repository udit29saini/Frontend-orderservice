import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav1 from "./OrderManagement/Nav1";
import AllOrder from "./OrderManagement/AllOrder";
import QueryOrder from "./OrderManagement/QueryOrder"
import EditModal from "./OrderManagement/EditModal"
import AddOrder from "./OrderManagement/AddOrder";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Product from "./OrderManagement/Product";
import Cart from "./OrderManagement/Cart";

function App() {
  return (
    <div >
      <Nav1 />
      <Router>
        <Switch>
          
           <Route exact path='/view-order'  > <AllOrder /></Route>
           <Route exact path='/add-order'  > <AddOrder /></Route>
           <Route exact path='/query-Order'  > <QueryOrder /></Route>
           <Route exact path='/Product'  > <Product /></Route>
           <Route exact path='/Cart'  > <Cart /></Route>
                   
        
         </Switch>
      </Router>
    </div>
  );
}

export default App;
