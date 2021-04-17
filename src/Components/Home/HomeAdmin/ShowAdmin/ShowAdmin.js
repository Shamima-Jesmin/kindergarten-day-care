import React from 'react';

const ShowAdmin = ({admin}) => {
    return (
        <div>
           <div className="card" style={{width:'18rem', marginLeft:'20px'}}>
                <div  className="card-body">
                    <h5 className="card-title"> Name:{admin.name}</h5>
                    <p className="card-text"> {admin.description} </p>
                </div>
            </div>
        </div> 
       
    );
};

export default ShowAdmin;