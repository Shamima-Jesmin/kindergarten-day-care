import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../../Shared/Navbar/Navbar';
import SideNav from '../../Shared/SideNav/SideNav';

const MakeAdmin = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {

    const adminData = {
      name: data.name,
      email:data.email,
      description: data.description
    };
    const url = `https://childcare123.herokuapp.com/addAdmin`
    console.log(adminData)
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(adminData)
    })
      .then(res => console.log('server side res', res))
  }
    return (
        <div className='row'>
            <Navbar></Navbar>
            <div className='col-md-6'>
            
            <SideNav></SideNav>
            </div>
           
            <div className='col-md-6'>
            <form onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: '50px', padding: '20px' }}>
          <input name="name" defaultValue="Name" {...register("name")} />
          <br /> <br/>
          <input name="email" defaultValue="Email" {...register("email")} />
          <br /> <br/>
          <input name="description" defaultValue="Description" {...register("description")} />
          <br /> <br/>

          <input type="submit" />
        </form>
            </div>
            
           
        </div>
    );
};

export default MakeAdmin;