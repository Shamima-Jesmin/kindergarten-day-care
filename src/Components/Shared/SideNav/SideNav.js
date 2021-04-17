import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div>
             <Nav className="flex-column">
        <Link to="/orderList">Order List</Link>
        <Link to="/addClass">Add Class</Link>
        <Link to="/makeAdmin">Make Admin</Link>
        <Link to="/manageServices">Manage Services</Link>
      </Nav>
        </div>
    );
};

export default SideNav;