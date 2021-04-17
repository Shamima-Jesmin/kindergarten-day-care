import React from 'react';

const ShowReview = ({ review }) => {
    return (
        <div  className='row'>
            <div className='col-md-4 col-sm-6 col-12 '>
                <div className="card" style={{ width: '18rem', marginLeft: '20px' }}>
                    <div>
                        <div className="card-body">
                            <h5 className="card-title"> Name:{review.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{review.designation}</h6>
                            <p className="card-text"> {review.description} </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default ShowReview;