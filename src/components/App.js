import React, { useState } from "react";
import Form from "./Form";
import Login from "./Login";
import users from "../mock-db/users.json";
import Protectedcomponent from "./ProtectedComponent"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Switch>
        <>
          {user &&
            <Protectedcomponent
              user={user}
              users={users}
              setUser={setUser}
            /> 
          }

          <Route path="/signup">
            <Form />
          </Route>

          <Route path="/login">
            {user ?
              <Redirect to="/index" /> :
              <Login
                setUser={setUser}
                users={users}
              />}
          </Route>

          <Route path="/" >
            {user ?
              <Redirect to="/index" /> :
              <Redirect to="/login" />}
          </Route>
        </>
      </Switch>
    </Router>
  );
}

// Creating a protectedComponent:
// nesting components