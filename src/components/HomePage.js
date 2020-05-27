import React from 'react';
import home from '../images/home.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='main-container'>
      <div className='container-1'>
        <p>
          Search our listings for entire or shared homes <br></br> with flexible
          durations and payments plans
        </p>

        <h1>
          The best way to<br></br> rent your home
        </h1>
        <div className='dropdown'>
          <button
            className='btn btn-primary dropdown-toggle'
            type='button'
            data-toggle='dropdown'
          >
            Choose Location
            {/* <span className='caret' /> */}
          </button>
          <ul className='dropdown-menu'>
            <li>
              <Link to='/Toronto'>Toronto</Link>
            </li>
            <li>
              <Link to='/Montreal'>Montreal</Link>
            </li>
            <li>
              <Link to='/Vancouver'>Vancouver</Link>
            </li>
            <li>
              <Link to='/Ottawa'>Ottawa</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='container-2'>
        <img src={home} alt='/' />
      </div>
    </div>
  );
};

export default HomePage;
