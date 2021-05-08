import React from "react";
import Card from "./Card";
import UserInfo from "./UserInfo";
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import Form from "./Form";

function IndexView({users}) {
  return (
    <>
      {users.map((user) => <Card key={user.id} userInfo={user} />)}
{/* 
     <Switch>
       <Route path={`${path}/:id`}>
         <UserInfo users={users}/>      // Should I be creating a nested route like this for my user  
      </Route>                          // show page?
     </Switch> */}
    )
    </>)
}

export default IndexView