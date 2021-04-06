import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function IndexView({ users }) {
  return users.map((user) => (
    <Link to={`/userInfo/${user.id}`}>
      <Card key={user.id} userInfo={user} />
    </Link>
  ));
}

export default IndexView;
