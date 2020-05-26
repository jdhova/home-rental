import React, { Fragment } from 'react';
import keys from '../images/keys.png';
import calendar from '../images/calendar.png';
import search from '../images/search.png';

const Process = () => {
  return (
    <Fragment>
      <h2 className='hclass'>You're three steps away from your perfect home</h2>
      <div className='main-process'>
        <div class='process-1'>
          <img src={search} alt='search' />

          <h4>
            {' '}
            <strong>FLEXIBLE OPTIONS</strong>
          </h4>

          <h2>Find the home you need</h2>
          <p>
            We offer flexible options, designed around your needs.<br></br>
            Browse shared or entire homes by where you want to live <br></br>
            and how frequently you want to pay
          </p>
        </div>

        <div class='process-2'>
          <img src={calendar} alt='calendar' />

          <h4>
            <strong>ONLINE BOOKING</strong>
          </h4>
          <h2>Schedule a visit</h2>
          <p>
            You can easily book a tour of your prospective home online.<br></br>
            Ourneighbourhood reps are readily available to show <br></br>you
            around at no cost to you.
          </p>
        </div>

        <div className='process-3'>
          <img src={keys} alt='keys' />
          <h4>
            <strong>STREAMLINED PROCESS</strong>
          </h4>
          <h2>Book in minutes, not days</h2>
          <p>
            You can rent your future home in a few clicks. <br></br>
            We've streamlined the entire process to get you moved in, faster.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Process;
