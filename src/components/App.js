import React, { useState } from "react";
import "../index.css";
import Form from "./Form";
import IndexView from "./IndexView";
import Login from "./Login";
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
            <Login setUser={setUser} /> 
          )}
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
