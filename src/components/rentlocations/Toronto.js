import React, { Fragment } from 'react';
import toronto1 from '../../images/apart1T.jpeg';
import toronto2 from '../../images/apart2T.jpeg';
import toronto3 from '../../images/apart3T.jpeg';
import toronto4 from '../../images/apart4T.jpeg';
import toronto5 from '../../images/apart5T.jpeg';
import toronto6 from '../../images/apart6T.jpeg';

const Toronto = () => {
  return (
    <Fragment>
      <div className='main-toronto'>
        <div className='toronto-apartment1'>
          <img src={toronto1} alt='toronto1 ' />
          <p>here we move </p>
        </div>
        <div className='toronto-apartment2'>
          <img src={toronto2} alt='toronto1 ' />
          <p>here we move </p>
        </div>
        <div className='toronto-apartment3'>
          <img src={toronto3} alt='toronto1 ' />
          <p>here we move </p>
        </div>
        <div className='toronto-apartment4'>
          <img src={toronto4} alt='toronto1 ' />
          <p>here we move </p>
        </div>
        <div className='toronto-apartment5'>
          <img src={toronto5} alt='toronto1 ' />
          <p>here we move </p>
        </div>

        <div className='toronto-apartment6'>
          <img src={toronto6} alt='toronto1 ' />
          <p>here we move </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Toronto;
