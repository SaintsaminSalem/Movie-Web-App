import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
      <p>Released: {movie.Year}</p>
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
};

export default MovieDetail;