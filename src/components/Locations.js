import React, { Fragment } from 'react';

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
          <a href='#'></a>Toronto
        </div>
        <div className='montreal'>
          <a href='#'></a>Montreal
        </div>
        <div className='vancouver'>
          <a href='#'></a> Vancouver
        </div>
        <div className='ottawa'>
          <a href='#'></a>Ottawa
        </div>
      </div>
    </Fragment>
  );
};

export default Locations;
