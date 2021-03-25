import React from 'react';
import PropTypes from 'prop-types';

const outerSectionStyle = {
  width: '30%',
  display: 'grid',
  gridTemplateColumns: '40% auto',
  padding: '20px 16px',
  margin: '20px auto'

}

const Login = () => {
  return (
    <div style={outerSectionStyle}>
      <h1>Login</h1><br/>
      <form
        name="form"
        id="login"
      // onSubmit={handleSubmit}
      >
        <div id="username">
          <label htmlFor="username">User Name</label><br />
          <input
            // onChange={handleNameChange}
            type="text"
            name="username"
            // value={username}
            placeholder="Username"
          /><br />
        </div>

        <div id="password">
          <label htmlFor="password">Password</label><br />
          <input
            // onChange={handleNameChange}
            type="text"
            name="password"
            // value={password}
            placeholder="Password"
          /><br />
        </div>
        <button className="btn btn-danger" type="submit">Submit</button>
      </form>
    </div>
  );
};





export default Login;
