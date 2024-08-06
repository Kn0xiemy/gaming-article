import React from 'react';
import { Link } from 'react-router-dom'



function Header() {
  return (
    <>
    <header>
      <nav>
		      <h1>Company Name</h1>
        <ul className='nav-links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/">Create Article</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;