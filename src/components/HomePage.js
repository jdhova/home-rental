import React from 'react';
import home from '../images/home.png';

const HomePage = () => {
  return (
    <div className='main-container'>
      <p>Where will you like to Live</p>
      <form action='/action_page.php'>
        <label htmlFor='cars'>Choose Location:</label>
        <select name='location' id='location'>
          <option value='Toronto'>Toronto</option>
          <option value='Montreat'>Montreat</option>
          <option value='Ottawa'>Ottawa</option>
          <option value='Victoria'>Victoria</option>
        </select>
        <br />
        <br />
        {/* <input type='submit' defaultValue='Submit' /> */}
      </form>

      <h1>
        The best way to<br></br> rent your home
      </h1>
      <p1>
        Search our listings for entire or shared homes with<br></br> flexible
        durations and payments plans.
      </p1>

      {/* <div className='img'>
        <img src={home} alt='Home' />
      </div> */}
    </div>
  );
};

export default HomePage;
