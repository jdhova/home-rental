import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Locations = () => {
  return (
    <Fragment>
      <div className='new'>
        <h2>Explore by neighborhood</h2>
        <h4>We provide living options in popular neighborhoods.</h4>
        <h4>Browse by location</h4>
      </div>
      <div className='location-container'>
        <div className='toronto'>
          {' '}
          <Link to='/Toronto'>Toronto</Link>
        </div>
        <div className='montreal'>
          <Link to='/Toronto'>Montreal</Link>
        </div>
        <div className='vancouver'>
          <Link to='/Toronto'>Vancouver</Link>
        </div>
        <div className='ottawa'>
          <Link to='/Toronto'>Ottawa</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Locations;
