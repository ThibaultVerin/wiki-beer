import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/Home/Home';
import Beer from './components/Beer/Beer';
import BeerDetail from './components/BeerDetail/BeerDetail';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <Helmet>
          <title>Wiki-Beer</title>
        </Helmet>
        <Navbar />
        <div className='main-div'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beer-list' component={Beer} />
            <Route exact path='/beer/:id' component={BeerDetail} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
