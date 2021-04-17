import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Navbar from '../../Shared/Navbar/Navbar';
import SideNav from '../../Shared/SideNav/SideNav';

const OrderList = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data)
            })
    }, [])
    return (
        <div className='row'>
            <Navbar></Navbar>
            <div className='col-md-6'>
            <SideNav></SideNav>
            </div>
            <div className='col-md-6'>
                <h2>Here is info</h2>
            {
                 orders.map(order => 
                 <ListGroup.Item>Name:{order.name}
                    <ListGroup.Item>Email: {order.email}</ListGroup.Item>
                    
                   </ListGroup.Item>
                )
            }
            </div>
            
        </div>
    );
};

export default OrderList;