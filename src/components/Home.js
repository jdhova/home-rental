import React, { Fragment } from 'react';
import HomePage from './HomePage';
import Locations from './Locations';
import Process from './Process';
import Footer from './Footer';

function Home() {
  return (
    <Fragment>
      <HomePage />
      <Locations />
      <Process />
      <Footer />
    </Fragment>
  );
}

export default Home;
