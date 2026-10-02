import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

import useAuth from "../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {loading, handleLogin} = useAuth()

  const navigate = useNavigate()

  function togglePassword(e) {
    const check_val = e.target.checked;
    const passwordElem = document.getElementById("password");

    // if value was false -> after click I get true
    // this is for true
    if (check_val) {
      passwordElem.setAttribute("type", "text");
    } else {
      passwordElem.setAttribute("type", "password");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await handleLogin({email, password})
    navigate("/")
  }

  if(loading){
    return <h1>Loading....</h1>
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <label htmlFor="showPassword">Show Password</label>
        <input
          id="showPassword"
          type="checkbox"
          onChange={(e) => togglePassword(e)}
        />

        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
