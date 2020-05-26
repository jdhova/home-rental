import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Toronto from './components/rentlocations/Toronto';
import Ottawa from './components/rentlocations/Ottawa';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        {' '}
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/toronto' component={Toronto} />
          <Route exact path='/ottawa' component={Ottawa} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
