import React, { useState } from "react";
import "../index.css";
import Form from "./Form/Form";
import IndexView from "./IndexView/IndexView";
import Login from "./Login/Login";
import "../App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/">logout</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/" exact>
          {user ? (
            <Redirect to="/index" />
          ) : (
            <Login validUser={(userParam) => setUser(userParam)} />
          )}{" "}
          {/*protected route*/}
        </Route>
        <Route path="/signup">
          <Form />
        </Route>
        <Route path="/index">
          <IndexView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
