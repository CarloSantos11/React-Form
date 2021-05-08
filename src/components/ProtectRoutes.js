import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import UserInfo from './UserInfo'
import IndexView from './IndexView'
import Login from "./Login";

const Protectroutes = ({users}) => {
  return (
    <Switch>
       <Route path="/" exact>
         <Redirect to="/users" />
       </Route>
      <Route exact path="/users/:id">
        <UserInfo users={users} />
      </Route>

      <Route exact path="/users">
        <IndexView users={users} />
      </Route>
    </Switch>
  )
}

export const UnauthenticatedRoutes = ({setAuthenticated: setUser, users}) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Login setUser={setUser} users={users} />
      </Route>
    </Switch >
  )  
}

export default Protectroutes
