import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';

const FindAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] =useState[false]
   console.log(isAdmin)
    useEffect(()=>{
        const url = `https://childcare123.herokuapp.com/findAdmin`
        console.log(reviewData)
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: loggedInUser.email})
        })
          .then(res => res.json())
            console.log('server side res', res)
          .then(data => setAdmin(data))
      
    },[])
    return (
        <div>
            
        </div>
    );
};

export default FindAdmin;