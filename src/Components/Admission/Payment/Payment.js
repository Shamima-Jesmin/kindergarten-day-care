import React from 'react';
import {  Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import Navbar from '../../Shared/Navbar/Navbar';
import SideNav from '../../Shared/SideNav/SideNav';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IeCydFeynkwCJUDQirqAjze4gARIUnXzQBWg5q5jPzIBOIdaNGHJKxoesRcYQsxPJWgh9CTsuVNFpQ1s50miPDf00LBuSsng0')

const Payment = () => {
    return (
        <div className='row'>
           <Navbar></Navbar>
           <div className='col-md-6'>
           <SideNav></SideNav>
           </div>
           <div className='col-md-6'>
           <Elements stripe={stripePromise}>
                <h3>Please Proceed Your Payment</h3>
                <SimpleCardForm></SimpleCardForm>
               
            </Elements>
           </div>
           
        </div>
    );
};

export default Payment;
