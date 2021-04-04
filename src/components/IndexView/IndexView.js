import React from "react";
import Card from "../Card/Card";
import users from "../../mock-db/users.json";

function IndexView(props) {
  return (
    <>
      {users.map((user) => (

        <Card key={user.id} userInfo={user} func={console.log(user.id)} />
      ))}
    </>
  );
}

export default IndexView;
