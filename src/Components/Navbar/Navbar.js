import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
      <div className="navbar-main">
        <div className="container">
          <div className="navbar-logo">
            <Link to="/">
              <img src="./logos/Group 1329.png" alt="" />
            </Link>
          </div>
          <div className="navbar-menu">
            <ul className="nav-menu ml-auto">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Donation</Link>
              </li>
              <li>
                <Link to="/">Events</Link>
              </li>
              <li>
                <Link to="/">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-btn">
            <Link to="/register" className="primary-btn">
              Register
            </Link>
            <Link to="/volunteer-list" className="primary-btn dark">
              Admin
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Navbar;