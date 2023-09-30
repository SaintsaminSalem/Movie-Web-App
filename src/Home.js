/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import MovieDetailsPage from './MovieDetailsPage';
import { Link } from 'react-router-dom'; // Import Link

const API_KEY = '5cfa474f';
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=5cfa474f';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState(''); // Empty string for initial search value
  const [isLoading, setIsLoading] = useState(false);

  const searchMovies = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}&s=${searchValue}`);
      if (response.ok) {
        const data = await response.json();
        setMovies(data.Search || []);
      } else {
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchMovies();
  }, [searchValue]);

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="app">
      <h1>CinemaCity</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchValue}
          onChange={handleSearchInputChange}
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
              {/* Use Link to navigate to Movie Details */}
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default Home;