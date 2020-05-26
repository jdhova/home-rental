import React, { Fragment } from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Locations from './Locations';
import Process from './Process';

function Home() {
  return (
    <Fragment>
      <Navbar />
      <HomePage />
      <Locations />
      <Process />
    </Fragment>
  );
}

export default Home;
