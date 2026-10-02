import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

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

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

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

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
