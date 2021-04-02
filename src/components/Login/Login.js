import React, { useState } from "react";
import users from "../../mock-db/users.json";

const outerSectionStyle = {
  textAlign: "center",
  width: "50%",
  padding: "20px 16px",
  margin: "20px auto",
};

const Login = (props) => {
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [activeUser, setActiveUser] = useState(false);
  const [user, setUser] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    users.forEach((currentUser) => {
      if (
        currentUser?.username === usernameField &&
        currentUser?.password === passwordField
      ) {
        setUser(currentUser);
      }
      //! works but creates duplicate logs? WHY
      if (currentUser?.active === false) {
        setActiveUser((currentUser = true));
        console.log(currentUser);
      }
    });
    props.onChange(user, activeUser);
  }

  function handleNameChange(e) {
    setUsernameField(e.target.value);
  }

  function handlePasswordChange(e) {
    setPasswordField(e.target.value);
  }

  return (
    <div style={outerSectionStyle}>
      <h1>Login</h1>
      <br />
      <form name="form" id="login" onSubmit={handleSubmit}>
        <div id="username">
          <label htmlFor="username">User Name</label>
          <br />
          <input
            onChange={handleNameChange}
            type="text"
            name="username"
            value={usernameField}
            placeholder="Username"
          />
          <br />
        </div>

        <div id="password">
          <label htmlFor="password">Password</label>
          <br />
          <input
            onChange={handlePasswordChange}
            type="text"
            name="password"
            value={passwordField}
            placeholder="Password"
          />
          <br />
        </div>
        <br />
        <button
          className="btn btn-danger"
          type="submit"
          style={{ marginRight: "10px" }}
        >
          Submit
        </button>
        <button className="btn btn-danger" type="submit">
          <a href="/signup">Signup</a>
        </button>
      </form>
    </div>
  );
};

export default Login;