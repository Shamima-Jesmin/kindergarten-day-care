import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import SideNav from '../../Shared/SideNav/SideNav';

const AddClass = () => {
  const [info, setInfo] = useState({})
  const [file, setFile] = useState(null);
  const handleBlur = e => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  }
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  }
  const handleSubmit = () => {
    const formData = new FormData()
    console.log(info);
    formData.append('file', file);
    formData.append('name', info.name);
    formData.append('email', info.email);
    formData.append('id', info.id);
    formData.append('age', info.age);
    formData.append('classNumber', info.classNumber);
    formData.append('fee', info.fee);
    formData.append('status', info.status);
    fetch('https://childcare123.herokuapp.com/addClass', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (

    <section>
      <Navbar></Navbar>
      <div className='row'>
        <div className='col-md-6'>
          <SideNav></SideNav>
        </div>
        <div className='col-md-6'>
           <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Enter email" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Class Id</label>
            <input onBlur={handleBlur} type="number" class="form-control" name="id" placeholder="Id" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Name</label>
            <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Name" />
          </div>
         <div class="form-group">
            <label for="exampleInputPassword1">Status</label>
            <input onBlur={handleBlur} type="text" class="form-control" name="status" placeholder="Status" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Age Group</label>
            <input onBlur={handleBlur} type="number" class="form-control" name="age" placeholder="Age" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Fee</label>
            <input onBlur={handleBlur} type="number" class="form-control" name="fee" placeholder="Fee" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Total Class</label>
            <input onBlur={handleBlur} type="number" class="form-control" name="classNumber" placeholder="classNumber" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Upload a image</label>
            <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="Picture" />
          </div>
          

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      </div>
      
    </section>

  );
};

export default AddClass;