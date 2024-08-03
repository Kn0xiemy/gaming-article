import React from 'react';
import './component-css/Header.module.css';
import { Link } from 'react-router-dom'



function Header() {
  return (
    <>
    <div className="nav-container">
      <nav>
        <h1>Company Name</h1>
        
        <ul>
          <li className='test'><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Login</a></li>
          <li><a href="">Logout</a></li>
          <li><a href="">Create Article</a></li>
        </ul>
      </nav>
    </div>
    </>
  );
}

export default Header;