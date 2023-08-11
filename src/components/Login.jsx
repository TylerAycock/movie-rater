import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ token, setToken }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [button, setButton] = useState(false);
  const navigate = useNavigate();

  const sumbitHandler = (e) => {
    e.preventDefault();
    const user = {
      userName: userName.trim(),
      password: password,
    };
    console.log(user);
    !button
      ? axios
          //register new user
          .post("http://localhost:5050/user", user)
          .then((res) => {
            // console.log(res);
            alert(res.data);
          })
          .catch((err) => console.log(err))
      : axios
          //login existing user
          .post("http://localhost:5050/login", user)
          .then((res) => {
            // console.log(res.data); if there is a token, alert user is logged in other wise some error occured
            // console.log(res.data)
            localStorage.setItem("usertoken", res.data);
            navigate("/watchlist");
            setToken(res.data);
          })
          .catch((err) =>
            console.log("we cant log you in on the front end", err)
          );
  };

  const logoutHandler = ()=> {
    localStorage.clear()
    setToken('')
    alert('User Logged Out')
  }

  return (
    token? <button onClick={logoutHandler}>Logout</button> :
    <form onSubmit={sumbitHandler}>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit" onClick={() => setButton(false)}>
        Sign up
      </button>
      <button type="submit" onClick={() => setButton(true)}>
        Log In
      </button>
    </form>
  );
};

export default Login;
