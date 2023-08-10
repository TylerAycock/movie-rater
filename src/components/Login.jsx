import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [button, setButton] = useState(false);

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
            alert(res.data)
          })
          .catch((err) => console.log(err))
      : axios
      //login existing user 
          .post("http://localhost:5050/login", user)
          .then((res) => {
            // console.log(res.data); if there is a token, alert user is logged in other wise some error occured 
            console.log(res.data)
            localStorage.setItem('usertoken', res.data)
            alert(res.data)
          })
          .catch((err) =>
            console.log("we cant log you in on the front end", err)
          );
  };

  return (
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
