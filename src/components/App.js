import React, { useState } from "react";
import "../index.css";
import Form from "./Form";
import IndexView from "./IndexView";
import Login from "./Login";
import Nav from "./Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Switch>
        <>
          {user && <Nav setUser={setUser} />}

          <Route path="/" exact>
            {user ? ( // If User is present
              <Redirect to="/index" /> // Display index
            ) : (
              // Otherwise Display Login
              <Login setUser={setUser} />
            )}
          </Route>

          <Route path="/signup">
            <Form />
          </Route>

          <Route path="/index">
            <IndexView />
          </Route>
        </>
      </Switch>
    </Router>
  );
}

export default App;
