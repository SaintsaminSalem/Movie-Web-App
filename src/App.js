/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import './Home.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetail from './MovieDetail';
import MovieDetailsPage from './MovieDetailsPage';
import Home from './Home';
import History from './History'

const API_KEY = '5cfa474f'
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=5cfa474f';

const App = () => {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:imdbID" component={MovieDetailsPage} />

            {/* Add more routes as needed */}
          </Switch>
        </Router>
      );
    }
    
export default App;