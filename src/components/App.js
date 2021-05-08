import React, { useState, useEffect } from "react";
import Form from "./Form";
import Nav from "./Nav";
import users from "../mock-db/users.json";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProtectedRoutes, { UnauthenticatedRoutes } from "./ProtectRoutes"


function App() {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser) {
      setAuthenticated(currentUser);
    }
  }, [])

  return (
    <Router>
      <Switch>
        <>
          {authenticated && <Nav setUser={setAuthenticated} authenticated={authenticated} />}

          <Route path="/signup">
            <Form />
          </Route>

          {authenticated && <ProtectedRoutes users={users} />}
          {!authenticated && <UnauthenticatedRoutes users={users} setAuthenticated={setAuthenticated} />}

          <Redirect to="/" />
        </>
      </Switch>
    </Router>
  );
}

export default App;

// Create unauthorized Page
// Create PrivateComponent
// (Should be in a new file) For user authentication a new class must be created
// this will have an isAuthenticated property
// check of Oauth 

// Create a class for Role for user

// NEW PAGE
// Accessible only by a select group of users
// We should be passing the PATH and Component that we have
{/* <PrivateRoute path='/example' exact component={Example} /> */ }