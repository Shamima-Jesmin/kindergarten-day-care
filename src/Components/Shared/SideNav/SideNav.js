import React, { useContext, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const SideNav = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] =useState(false)
 console.log(isAdmin)
  useEffect(()=>{
      const url = `https://childcare123.herokuapp.com/findAdmin`
     
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: loggedInUser.email})
      })
        .then(res => res.json())
          // console.log('server side res', res)
        .then(data => setIsAdmin(data))
    
  },[])
    return (
        <div>
             <Nav className="flex-column">
        <Link to="/orderList">Order List</Link>
        <Link to="/addClass">Add Class</Link>
        {
          isAdmin && <Link to="/makeAdmin">Make Admin</Link>
        }
        <Link to="/manageServices">Manage Services</Link>
      </Nav>
        </div>
    );
};

export default SideNav;