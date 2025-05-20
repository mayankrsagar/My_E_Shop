import './Navbar.css';

import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="navbar">
    <h1 className="navbar_brand" >My E‑Shop</h1>
    <div className="navbar_links">
      <NavLink to="/" className="navbar_link" end>Home</NavLink>
      <NavLink to="/cart" className="navbar_link">Checkout</NavLink>
    </div>
  </nav>
);
export default Navbar;