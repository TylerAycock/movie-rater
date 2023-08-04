import MovieCard from "./MovieCard";
import "./MovieList.css";
import{useNavigate} from 'react-router-dom'

const MovieList = ({
  movieList,
  watchList,
  addToWatchList,
  removeWatchList,
  inWatchList,
}) => {
  const clickHandler = (movie) => {
    addToWatchList(movie);
  };

  const myList = movieList.map((movie, index) => {
    const isWatchList = watchList.filter((someMovie) => {
      return someMovie.id === movie.id;
    });

    let button = "";

    if (inWatchList && isWatchList.length > 0) {
      button = <h2>Movie has been added</h2>;
    } else{
      button = <button onClick={()=>{clickHandler(movie)}}>Add</button>
    }

    return (
      <div>
        <MovieCard
          key={index}
          movie={movie}
          addToWatchList={addToWatchList}
          removeWatchList={removeWatchList}
          watchList={watchList}
        ></MovieCard>
        <div>{button}</div>
      </div>
    );
  });

  return <div className="movie-container">{myList}</div>;
};

export default MovieList;
