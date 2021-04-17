import React, { useContext, useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import UserSideNav from '../../Shared/UserSideNav/UserSideNav';

const AdmissionList = () => {
    const [orders, setOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch(`https://childcare123.herokuapp.com/orders?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data)
            })
    }, [loggedInUser.email])
    return (
        <div className='row'>
            <Navbar></Navbar>
            <div className='col-md-6'>
                <UserSideNav></UserSideNav>
            </div>
            <div className='col-md-6'>
                <h4>You have: {orders.length} orders</h4>
                {
                    orders.map(order =>
                        <ListGroup.Item>Name:{order.name}
                            <ListGroup.Item>Email: {order.email}</ListGroup.Item>
                            <ListGroup.Item>Fee: {order.fee}</ListGroup.Item>
                        </ListGroup.Item>
                    )
                }

            </div>
        </div>

       
    );
};

export default AdmissionList;