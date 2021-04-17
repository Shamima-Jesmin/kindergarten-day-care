import React, { useEffect, useState } from 'react';
import ClassCard from '../ClassCard/ClassCard';
import basic from '../../../images/basic.jpg'
import art from '../../../images/art.jpg';
import swimming from '../../../images/swimming.jpg'
import { useSpring, animated } from '@react-spring/core';

// const classData=[
//     {
//         id:1,
//         image:basic,
//         title: 'Basic Skills',
//         ageGroup:'3-5 Years',
//         classSize:'12',
//         fee:'65$'
//     },
//     {
//         id:2,
//         image:art,
//         title: 'Art Class',
//         ageGroup:'2-5 Years',
//         classSize:'12',
//         fee:'85$'
//     },
//     {
//         id:3,
//         image:swimming,
//         title: 'Swimming',
//         ageGroup:'2-6 Years',
//         classSize:'12',
//         fee:'35$'
//     }
// ]
const ChooseClasses = () => {
    // const props = useSpring({
    //     to: [{ opacity: 1, color: '#ffaaee' }, { opacity: 0, color: 'rgb(14,26,19)' }],
    //     from: { opacity: 0, color: 'red' }
    // })

    const [classes, setClasses] = useState([])
    console.log(classes)
    useEffect(() => {
        fetch('https://childcare123.herokuapp.com/totalClasses')
            .then(res => res.json())
            .then(data => setClasses(data))

    }, [])


    return (
        <div className=' row '>
            {/* <animated.div style={props}> */}
           
           <h1 className="text-center mt-5">Choose Classes For Your Child</h1>
         <div className='d-flex justify-content-center mt-3'>
            
           {
               classes.map(singleClass => <ClassCard singleClass={singleClass}></ClassCard>)
           }
         </div>


              
               {/* </animated.div > */}
        </div>
        
                
               
            
       
    );
};

export default ChooseClasses;