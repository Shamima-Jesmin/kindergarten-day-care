import React from 'react';
import Payment from '../Payment/Payment';
import Navbar from '../../Shared/Navbar/Navbar';
import UserSideNav from '../../Shared/UserSideNav/UserSideNav';


const AdmissionInfo = () => {
 
  
    return (
        <div className="row">
           <Navbar></Navbar>
           <div className='col-md-6'>
            <UserSideNav></UserSideNav>
           </div>
           <div className='col-md-6'>
          
            <Payment></Payment>

           </div>
          
        </div>
    );
};

export default AdmissionInfo;