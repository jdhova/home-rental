import React, { Fragment } from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Locations from './Locations';
import Process from './Process';
import Footer from './Footer';

function Home() {
  return (
    <Fragment>
      <Navbar />
      <HomePage />
      <Locations />
      <Process />
      <Footer />
    </Fragment>
  );
}

export default Home;
