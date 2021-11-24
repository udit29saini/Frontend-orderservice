import React from 'react'
import { NavItem,NavLink,Link } from 'reactstrap'
import { Navbar, Nav, Container, Form, FormControl,Button } from 'react-bootstrap';
const Nav1 = () => {
    return (
       <>
      {/* //   <div className="text-center my-3 ">
      // <h1 >Order Mangement</h1>
      // </div>
      //   <div className="nav justify-content-center" > */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
        <Container>
        <Navbar.Brand href="/">Order Service</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
  <Nav>
    <NavLink href="/view-order">
      View Order
    </NavLink>
    {''}
    <NavLink href="/add-order">
      Add Order
    </NavLink>
    {' '}
    <NavLink href="query-order">
      Query Order
    </NavLink>
    {' '}
    <NavLink href="/Product">
      Product
    </NavLink>
    {' '}
    {/* <NavLink href="/Cart">
      Cart
    </NavLink>
    {' '} */}
  </Nav>
      {/* </div> */}
      </Navbar.Collapse>
      </Container>
      </Navbar>
      </>
    )
}

export default Nav1
