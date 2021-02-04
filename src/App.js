import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/Home/Home';
import Beer from './components/Beer/Beer';
import BeerDetail from './components/BeerDetail/BeerDetail';
import Navbar from './components/Navbar/Navbar';
import PostBeer from './components/PostBeer/PostBeer';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <ToastProvider placement='top-right'>
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
              <Route exact path='/post-beer' component={PostBeer} />
            </Switch>
          </div>
        </div>
      </Router>
    </ToastProvider>
  );
}

export default App;
