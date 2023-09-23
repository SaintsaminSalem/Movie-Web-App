import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const API_KEY = '5cfa474f';
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const MovieDetailsPage = () => {
  const { imdbID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory(); // Get the history object

  useEffect(() => {
    // Fetch movie details based on the imdbID from the route parameter
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(`${API_URL}&i=${imdbID}`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [imdbID]);

  return (
    <div>
      <h2>Movie Details</h2>
      {loading ? (
        <p>Loading movie details...</p>
      ) : error ? (
        <p>{error}</p>
      ) : movieDetails ? (
        <div>
          <h3>{movieDetails.Title}</h3>
          <p>Year: {movieDetails.Year}</p>
          <p>Plot: {movieDetails.Plot}</p>
          <p>Director: {movieDetails.Director}</p>
          <p>Actors: {movieDetails.Actors}</p>
          <p>Genre: {movieDetails.Genre}</p>
          <p>Year: {movieDetails.Year}</p>
          <p>Rated: {movieDetails.Rated}</p>
          <p>Runtime: {movieDetails.Runtime}</p>
          <p>Production: {movieDetails.Production}</p>
          <p>Ratings: {movieDetails.Ratings.map((rating) => `${rating.Source}: ${rating.Value}`).join(', ')}</p>
          <p>Awards: {movieDetails.Awards}</p>
          <p>Country: {movieDetails.Country}</p>
          <p>Language: {movieDetails.Language}</p>
          {/* Display other movie details as needed */}
        </div>
      ) : null}
      <div>
        <button onClick={() => history.goBack()}>Go Back!</button>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
