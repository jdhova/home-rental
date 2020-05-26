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
          <Link to='toronto'></Link>Toronto
        </div>
        <div className='montreal'>
          <Link to='Montreal'></Link>Montreal
        </div>
        <div className='vancouver'>
          <Link to='vancouver'></Link> Vancouver
        </div>
        <div className='ottawa'>
          <Link to='/ottawa'></Link>Ottawa
        </div>
      </div>
    </Fragment>
  );
};

export default Locations;
