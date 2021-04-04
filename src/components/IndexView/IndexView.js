import React from "react";
import Card from "../Card/Card";
import users from "../../mock-db/users.json";

function IndexView() {
  return (
    <>
      {users.map((user) => (
        <Card key={user.id} userInfo={user} />
      ))}
    </>
  );
}

export default IndexView;
