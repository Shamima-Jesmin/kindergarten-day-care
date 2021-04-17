import React from 'react';
import lily from '../../../images/Lily Carter.jpg';
import regina from '../../../images/Regina Spaktor.jpg';
import richard from '../../../images/Richard Hill.jpg';
import jennifer from '../../../images/Jennifer Dsouza.jpg';

const TeachersInfo = () => {
    return (
        <div style={{padding:'100px'}} className="row">
            <h1 className="text-center">Our Teachers</h1>
          <div className="col-md-3 col-sm-6 col-12">
              <img style={{height:'100px', width:'200px'}} src={lily} alt=""/>
              <h3>Lily Carter</h3>
              <small>Basic Learning Teacher</small>
          </div> 
          <div className="col-md-3 col-sm-6 col-12">
          <img style={{height:'100px'}} src={regina} alt=""/>
              <h3>Regina Spektor</h3>
              <small>Art Teacher</small>
              </div> 
          <div className="col-md-3 col-sm-6 col-12">
          <img style={{height:'100px'}} src={richard} alt=""/>
              <h3>Richard Hill</h3>
              <small>Swimming Teacher</small>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
          <img style={{height:'100px'}} src={jennifer} alt=""/>
              <h3>Jennifer Dsouza</h3>
              <small>Preschool Teacher</small>
              </div>

        </div>
    );
};

export default TeachersInfo;