import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <Link to='/beer-list'>
        <div className='beer-list' />
      </Link>
      <Link to='/post-beer'>
        <div className='post-beer' />
      </Link>
    </div>
  );
};
export default Navbar;
