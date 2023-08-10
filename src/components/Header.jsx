import popcorn from "../images/popcorn.jpg";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <img src={popcorn} id="popcorn" />
      <h1 id="header">Tyler's Rating</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/watchlist">WatchList</NavLink>
        <NavLink to="/review">Review a Movie</NavLink>
        <NavLink to="/login">Sign Up</NavLink>
      </nav>
    </header>
  );
};

export default Header;
