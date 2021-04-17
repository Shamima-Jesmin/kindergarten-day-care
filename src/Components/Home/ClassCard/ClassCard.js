import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../../images/carts.png'

const ClassCard = (props) => {
    const { _id, name, age, fee, classNumber, image } = props.singleClass;
    // console.log(id)
    return (
        <div >

            <div class="card" style={{height:'400px', width: "200px" ,marginLeft:'20px'}}>
                <div className='col-md-4'>
                    <div className='d-flex '>
                        <div>
                            {/* {
                    singleClass.image ? <img style={{height:'100px'}} src= {`data: image/png;base64,${singleClass.image.img}`} alt=""/>
                    : <img style={{height:'100px'}}src={`https://childcare123.herokuapp.com/${singleClass.image}`} alt=""/>
                } */}
                        <img style={{ height: '100px' }} src={`https://childcare123.herokuapp.com/${image}`} alt="" />
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <small>Age Group: {age}</small>
                            <small>Total Class: {classNumber}</small>
                            <h3>Monthly Fee: {fee}</h3>
                            <Link to={`/admission/${_id}`} class='btn-btn-danger'>Buy Now</Link>
                        </div>
                      </div>

                    </div>
                </div>
            </div>




        </div>
    );
};

export default ClassCard;