import React from 'react'
import {Route} from 'react-router-dom'
import Nav from "./Nav";
import UserInfo from "./UserInfo";
import IndexView from "./IndexView";


const Protectedcomponent = ({user, users, setUser}) => {
  return (
    <div>

      { user && <Nav setUser={setUser} />}

      <Route path="/index">
        <IndexView users={users} />
      </Route>

      <Route path="/userInfo/:id">
        <UserInfo users={users} />
      </Route>
    </div>
  )
}

export default Protectedcomponent
