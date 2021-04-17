import React from 'react';
import dayCareImg from '../../../images/dayCare1.jpg'

const HeaderMain = () => {
    return (
       <main className="row  d-flex align-items-center  ">
        <div className="col-md-4 col-sm-6 col-12 offset-md-1">
           <h1>Welcome To <br/> The Kindergarten!</h1>
           <button class="btn btn-success" type="submit">Program and Prices</button>
        </div>
        <div className='col-md-6'>
      <img style={{height:'300px', padding:'20px'}} src={dayCareImg} alt=""/>
        </div>
       </main>
    );
};

export default HeaderMain;