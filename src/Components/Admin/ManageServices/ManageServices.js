import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import SideNav from '../../Shared/SideNav/SideNav';
import ManageAllServices from './ManageAllServices/ManageAllServices';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://childcare123.herokuapp.com/totalClasses`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
    }, [])
    return (
        <div className='row '>
            <Navbar></Navbar>
            <div className='col-md-6'>
            <SideNav></SideNav>
            </div>
            <div className='container'>
                  <div className='col-md-6'>
            <h5>Manage Services area</h5> 
            {
              services.map(pd =><ManageAllServices pd={pd}></ManageAllServices>)
              
          }
             </div> 
            
            </div>
           
        </div>
    );
};

export default ManageServices;