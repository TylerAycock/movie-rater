import MovieCard from "./MovieCard";
import { useState } from "react";
import PopUp from "../modal/Popup";

const WatchList = ({ watchList, removeWatchList }) => {

  const [modal, setModal] = useState(false);

  const removeHandler = (mov) => {
    removeWatchList(mov);
    setModal(!modal)
  };

  const myWatchList = watchList.map((movie, index) => {
    return (
      <>
        <MovieCard
          key={index}
          movie={movie}
          removeWatchList={removeWatchList}
          watchList={watchList}
        />
        <button onClick={() => removeHandler(movie)}>Remove</button>
      </>
    );
  });

  return (
    <div className="movie-container">
      <h2>My Watched List</h2>
      {myWatchList}
      {modal?<PopUp setModal={setModal} modal={modal}></PopUp>: <></>}
    </div>
  );
};

export default WatchList;
