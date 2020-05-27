import React, { Fragment } from 'react';
import montreal1 from '../../images/apartimg/apart1M.jpeg';
import montreal2 from '../../images/apartimg/apart2M.jpeg';
import montreal3 from '../../images/apartimg/apart3M.jpeg';
import montreal4 from '../../images/apartimg/apart4M.jpeg';
import montreal5 from '../../images/apartimg/apart5M.jpeg';
import montreal6 from '../../images/apartimg/apart6M.jpeg';

const Montreal = () => {
  return (
    <Fragment>
      <div className='main-toronto'>
        <div className='toronto-apartment1'>
          <img src={montreal1} alt='toronto1 ' />
          <p className='mt-info'>
            <strong>
              {' '}
              Single room in Shares house Derby Ct<br></br> Location Montreal{' '}
            </strong>
          </p>
        </div>
        <div className='toronto-apartment2'>
          <img src={montreal2} alt='toronto1 ' />
          <p className='mt-info'>
            <strong>
              Single Room in shares house <br></br>Location Montreal{' '}
            </strong>
          </p>
        </div>
        <div className='toronto-apartment3'>
          <img src={montreal3} alt='toronto1 ' />
          <p className='mt-info'>
            <strong>
              Montreal 1-bed Studio <br></br> Location Montreal
            </strong>
          </p>
        </div>
        <div className='toronto-apartment4'>
          <img src={montreal4} alt='toronto1 ' />
          <p className='mt-info'>
            <strong>
              Montreal 2-bed apartment <br></br> Location Montreal
            </strong>
          </p>
        </div>
        <div className='toronto-apartment5'>
          <img src={montreal5} alt='toronto1 ' />
          <p className='mt-info'>
            <strong>
              Montreal 1-bed Studio <br></br> Location Montreal
            </strong>
          </p>
        </div>

        <div className='toronto-apartment6'>
          <img src={montreal6} alt='toronto1 ' />
          <p className='mt-info'>
            <strong>
              Montreal Shared room in House <br></br> Location Montreal
            </strong>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Montreal;
