import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserSideNav = () => {
    return (
        <div>
                 <Nav className="flex-column">
        <Link to="/admissionList">Admission List</Link>
        <Link to="/admissionInfo">Admission Info</Link>
        <Link to="/review">review</Link>
        
      </Nav>
        </div>
    );
};

export default UserSideNav;