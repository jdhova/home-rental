import React from 'react';
// import home from '../images/home.png';

const HomePage = () => {
  return (
    <div className='main-container'>
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
            <a href='#'>Toronto</a>
          </li>
          <li>
            <a href='#'>Montreal</a>
          </li>
          <li>
            <a href='#'>Vancouver</a>
          </li>
          <li>
            <a href='#'>Ottawa</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
