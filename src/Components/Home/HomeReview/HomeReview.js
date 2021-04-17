import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import ShowReview from './ShowReview/ShowReview';

const HomeReview = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews)
  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then(res => res.json())
      .then(data => {
        setReviews(data)
       
      })
  }, [])
  return (
    <div style={{ padding: '100px' }} className=" row text-center">
      <h1>What The Parents Say</h1>
    
      <div className='d-flex  container justify-content-center col-sm-6 col-12 mt-3'>
    {
      reviews.map(review=><ShowReview review={review}></ShowReview>)
    }
      </div>
    </div>
  );
};

export default HomeReview;