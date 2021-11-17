import React from 'react'
import { NavItem, Nav, NavLink, Link } from 'reactstrap'
import "./order.css"
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
          <NavLink href="query-order">
            Query Order
          </NavLink>
          {' '}
          <NavLink href="/edit-order">
            Edit Order
          </NavLink>
          {' '}
          <NavLink href="/show-product">
            Products
          </NavLink>
          {' '}
        </Nav>
      </div>
    </div>
  )
}

export default Nav1
