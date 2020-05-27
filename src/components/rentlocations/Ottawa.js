import React, { Fragment } from 'react';
import ottawa1 from '../../images/apartimg/apart1O.jpeg';
import ottawa2 from '../../images/apartimg/apart2O.jpeg';
import ottawa3 from '../../images/apartimg/apart3O.jpeg';
import ottawa4 from '../../images/apartimg/apart4O.jpeg';
import ottawa5 from '../../images/apartimg/apart5O.jpeg';
import ottawa6 from '../../images/apartimg/apart6O.jpeg';

const Ottawa = () => {
  return (
    <Fragment>
      <div className='main-toronto'>
        <div className='toronto-apartment1'>
          <img src={ottawa1} alt='toronto1 ' />
          <p>here we move </p>
        </div>
        <div className='toronto-apartment2'>
          <img src={ottawa2} alt='toronto1 ' />
          <p>here we move </p>
        </div>
        <div className='toronto-apartment3'>
          <img src={ottawa3} alt='toronto1 ' />
          <p>here we move </p>
        </div>
        <div className='toronto-apartment4'>
          <img src={ottawa4} alt='toronto1 ' />
          <p>here we move </p>
        </div>
        <div className='toronto-apartment5'>
          <img src={ottawa5} alt='toronto1 ' />
          <p>here we move </p>
        </div>

        <div className='toronto-apartment6'>
          <img src={ottawa6} alt='toronto1 ' />
          <p>here we move </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Ottawa;
