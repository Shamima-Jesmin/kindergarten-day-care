import React from 'react';
import house from '../../../images/house.png';
import reading from '../../../images/reading.png';
import color from '../../../images/color-palette.png';
import playground from '../../../images/playground.png'

const Features = () => {
    return (
        <div className='row'>
            <div className='text-center'>
            <h1>Our Features</h1>
            </div>
            <div className='col-md-3'>
                <img style={{height:'100px'}} src={house} alt=""/>
                <h3>Happy <br/> Environment</h3>
            </div>
           <div className='col-md-3'>
           <img style={{height:'100px'}} src={reading} alt=""/>
               <h3>Active <br/> Learning</h3>
           </div>
           <div className='col-md-3'>
           <img style={{height:'100px'}} src={color} alt=""/>
               <h3>Creative <br/> Lessons</h3>
           </div>
           <div className='col-md-3'>
           <img style={{height:'100px'}} src={playground} alt=""/> 
               <h3>Amazing Playground</h3>
           </div>
        </div>
        
    );
};

export default Features;