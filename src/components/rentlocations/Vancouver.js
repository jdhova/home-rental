import React, { Fragment } from 'react';
import vancouver1 from '../../images/apartimg/apart1V.jpeg';
import vancouver2 from '../../images/apartimg/apart2V.jpeg';
import vancouver3 from '../../images/apartimg/apart3V.jpeg';
import vancouver4 from '../../images/apartimg/apart4V.jpeg';
import vancouver5 from '../../images/apartimg/apart5V.jpeg';
import vancouver6 from '../../images/apartimg/apart6V.jpeg';

const Vancouver = () => {
  return (
    <Fragment>
      <div className='main-toronto'>
        <div className='toronto-apartment1'>
          <img src={vancouver1} alt='toronto1 ' />
          <p className='mt-info'>
            <strong>Vancouver </strong>
          </p>
        </div>
        <div className='toronto-apartment2'>
          <img src={vancouver2} alt='toronto1 ' />
          <p className='mt-info'>
            <strong>Vancouver </strong>
          </p>
        </div>
        <div className='toronto-apartment3'>
          <img src={vancouver3} alt='toronto1 ' />
          <p className='mt-info'>
            <strong>Vancouver </strong>
          </p>
        </div>
        <div className='toronto-apartment4'>
          <img src={vancouver4} alt='toronto1 ' />
          <p className='mt-info'>
            <strong>Vancouver </strong>
          </p>
        </div>
        <div className='toronto-apartment5'>
          <img src={vancouver5} alt='toronto1 ' />
          <p className='mt-info'>
            <strong>Vancouver </strong>
          </p>
        </div>

        <div className='toronto-apartment6'>
          <img src={vancouver6} alt='toronto1 ' />
          <p className='mt-info'>
            <strong>Vancouver </strong>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Vancouver;
