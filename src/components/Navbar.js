import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='main-nav'>
      <div className='nav-1'>
        <Link to='/'>
          <h3>Home</h3>
        </Link>
      </div>

      <div className='nav-2'>
        <ul>
          <li>Browse Homes</li>
          <li>Process</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
