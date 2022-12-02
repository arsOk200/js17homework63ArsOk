import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <div className="container">
        <h1 className='me-5 text-white'>63Laba</h1>
        <div className='collapse navbar-collapse'>
          <ul className="navbar-nav mr-auto">
            <li className='nav-item me-3'><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li className='nav-item me-3'><NavLink to="/add-post" className="nav-link">Add post</NavLink></li>
            <li className='nav-item me-3'><NavLink to="/about" className="nav-link">About</NavLink></li>
            <li className='nav-item me-3'><NavLink to="/contacts" className="nav-link">Contacts</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;