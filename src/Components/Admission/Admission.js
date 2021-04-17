import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import UserSideNav from '../Shared/UserSideNav/UserSideNav';
import {  useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Payment from './Payment/Payment';

const Admission= () => {
    let { id } = useParams();
    console.log(id)

    const [service, setService] = useState([])
    console.log(service)
    useEffect(() => {
      const url= `https://childcare123.herokuapp.com/totalClasses`
      fetch(url)
        .then(res => res.json())
        .then(data => {
          
           setService(data)
           console.log(data)
        })
    }, [])

    const allClasses = service.find(services=> services?._id ===id)
    console.log(allClasses?.name)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  
    const handleOrders = () => {
      console.log('checkout clicked')
      const newOrders = { ...loggedInUser, ...service }
      fetch('https://childcare123.herokuapp.com/addOrders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOrders)
      })
        .then(res => res.json())
        .then(data => {
         
          console.log(data)
  
        })
    }
  console.log(id)
    return (
        <div className='row'>
            <Navbar></Navbar>
            <div className='col-md-6'>
            <UserSideNav></UserSideNav>
            </div>
            
           <div className ='col-md-6 mt-5'>
           <Card className="text-center" >
        
        <Card.Body>
          <Card.Title>Class Name:{allClasses?.name}</Card.Title>
          <p>Monthly Fee: ${allClasses?.fee}  </p>
        <p>Status: {allClasses?.status}</p>
          <Link to='/payment' onClick={handleOrders} class='btn-btn-danger'>Checkout</Link>
        </Card.Body>
      
      </Card>
           </div>
           
        </div>
    );
};

export default Admission;