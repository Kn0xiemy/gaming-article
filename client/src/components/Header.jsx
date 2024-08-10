import React from 'react';
import { Link } from 'react-router-dom'



function Header() {
  return (
    <>
    <header>
      <nav>
		      <h1>Company Name</h1>
        <ul className='nav-links'>
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/create-article/create">Create Article</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;