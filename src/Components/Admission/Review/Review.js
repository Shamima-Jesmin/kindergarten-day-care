import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../../Shared/Navbar/Navbar';
import UserSideNav from '../../Shared/UserSideNav/UserSideNav';

const Review = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {

    const reviewData = {
      name: data.name,
      designation: data.designation,
      description: data.description
    };
    const url = `http://localhost:5000/addReview`
    console.log(reviewData)
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    })
      .then(res => console.log('server side res', res))
  }
  return (
    <div className='row'>
      <Navbar></Navbar>
      <div className='col-md-6'>
        <UserSideNav></UserSideNav>
      </div>
      <div className='col-md-6'>
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: '50px', padding: '20px' }}>
          <input name="name" defaultValue="Name" {...register("name")} />
          <br /> <br/>
          <input name="designation" defaultValue="Designation" {...register("designation")} />
          <br /> <br/>
          <input name="description" defaultValue="Description" {...register("description")} />
          <br /> <br/>

          <input type="submit" />
        </form>
      </div>

    </div>
  );
};

export default Review;