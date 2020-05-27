import React, { Fragment } from 'react';
import toronto1 from '../../images/apartimg/apart1T.jpeg';
import toronto2 from '../../images/apartimg/apart2T.jpeg';
import toronto3 from '../../images/apartimg/apart3T.jpeg';
import toronto4 from '../../images/apartimg/apart4T.jpeg';
import toronto5 from '../../images/apartimg/apart5T.jpeg';
import toronto6 from '../../images/apartimg/apart6T.jpeg';

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
