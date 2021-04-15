import React from "react";
import Card from "./Card";

export default function IndexView({ users }) {
  return (
    <div style={{display: 'flex'}}>
      {users.map((user) =>
      <Card key={user.id} userInfo={user} />
      )}
    </div>
  );

}
