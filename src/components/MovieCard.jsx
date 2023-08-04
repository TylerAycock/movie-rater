import { useState } from "react";

import "./MovieCard.css";
const MovieCard = ({ movie }) => {
  const [details, setDetails] = useState(false);

  const clickHandler = () => {
    setDetails(!details);
  };

  const movieCardDetails = details ? (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <div>
        <p>{movie.vote_average}</p>
        <p>{movie.release_date}</p>
      </div>
      <button onClick={()=>clickHandler()}>See Movie</button>
    </div>
  ) : (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={`${movie.original_title}'s Poster`}
      />
      <button onClick={() => clickHandler()}>See Details</button>
    </div>
  );

  return (
    // <div className="movie-card">
    //   <h2>{movie.title}</h2>
    //   <img
    //     src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
    //     alt={`${movie.original_title}'s Poster`}
    //   />
    //   <button onClick={clickHandler}>See Details</button>
    // </div>
    <>{movieCardDetails}</>
  );
};

export default MovieCard;
