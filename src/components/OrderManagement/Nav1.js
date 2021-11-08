import React from 'react'
import { NavItem,Nav,NavLink,Link } from 'reactstrap'

const Nav1 = () => {
    return (
      <div>
        <div className="text-center my-3 ">
      <h1 >Order Mangement</h1>
      </div>
        <div className="nav justify-content-center" >
  <Nav>
    <NavLink href="/view-order">
      View Order
    </NavLink>
    {''}
    <NavLink href="/add-order">
      Add Order
    </NavLink>
    {' '}
    <NavLink href="#">
      Query Order
    </NavLink>
    {' '}
    
  </Nav>
      </div>
      </div>
    )
}

export default Nav1
