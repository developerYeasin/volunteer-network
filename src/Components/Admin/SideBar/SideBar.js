import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const SideBar = () => {
    return (
      <div className="col-md-2">
        <div className="admin-logo">
          <Link to="/">
            <img src="./logos/Group 1329.png" alt="" />
          </Link>
        </div>
        <ul className="side-bar-menu">
          <li>
            <Link to="/volunteer-list">volunteer-List</Link>
          </li>
        </ul>
        <div className="add-event-btn">
          <Link to="/volunteer-add-form">
            <button>Add event</button>
          </Link>
        </div>
      </div>
    );
};

export default SideBar;