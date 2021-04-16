import React, { useState } from "react";
import users from "../mock-db/users.json";
import styled from "styled-components";


const OuterSectionStyle = styled.section`
  text-align: center;
  width: 50%;
  padding: 20px 16px;
  margin: 20px auto;
`

const Button = styled.button`
  margin-right: 10px;
`
const Signup = styled.a`
  color:inherit;
`

const Login = ({ setUser }) => {
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    users.forEach((currentUser) => {
      if (
        currentUser?.username === usernameField &&
        currentUser?.password === passwordField
      ) {
        setUser(currentUser);
      }
    });
  }

  function handleNameChange(event) {
    setUsernameField(event.target.value);
  }

  function handlePasswordChange(event) {
    setPasswordField(event.target.value);
  }

  return (
    <OuterSectionStyle>
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
        <Button
          className="btn btn-danger"
          type="submit"
        >
          Submit
        </Button>
        <button className="btn btn-danger" type="submit">
          <Signup href="/signup">Signup</Signup>
        </button>
      </form>
    </OuterSectionStyle>
  );
};

export default Login;
