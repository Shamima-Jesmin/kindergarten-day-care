import React from 'react';
import events from '../../../images/upcomingEvents.jpg'

const UpcomingEvents = () => {
    return (
        <div style={{padding:'100px'}}className="row">
            <h1 className="text-center">Upcoming Events</h1>
          <div className="col-md-6">
              
              <h3>There are no upcoming events right now</h3>
          </div>
          <div className='col-md-6'>
              <img style={{height:'150px'}} src={events} alt=""/>
          </div>
        </div>
    );
};

export default UpcomingEvents;