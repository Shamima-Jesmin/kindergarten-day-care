import React, { useEffect, useState } from 'react';
import ShowAdmin from './ShowAdmin/ShowAdmin';

const HomeAdmin = () => {
    const [admins, setAdmins] = useState([]);
  console.log(admins)
  useEffect(() => {
    fetch(`https://childcare123.herokuapp.com/admin`)
      .then(res => res.json())
      .then(data => {
        setAdmins(data)
       
      })
  }, [])
    return (
        <div className='row m-auto'>
          <h1 className='text-center'>Our admin</h1>
            <div className='d-flex container justify-content-center align-items-center  mt-3 col-sm-6 col-12'>
    {
      admins.map(admin=><ShowAdmin admin={admin}></ShowAdmin>)
    }
      </div> 
        </div>
    );
};

export default HomeAdmin;