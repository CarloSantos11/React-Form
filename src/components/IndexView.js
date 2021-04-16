import React from "react";
import Card from "./Card";

function IndexView({users}) {
  return (
    users.map((user) => 
     <Card key={user.id} userInfo={user}/>
    ))
}

export default IndexView