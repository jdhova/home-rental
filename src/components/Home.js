import React, { Fragment } from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Locations from './Locations';

function Home() {
  return (
    <Fragment>
      <Navbar />
      <HomePage />
      <Locations />
    </Fragment>
  );
}

export default Home;
