import Card from "./Card";
import { useParams } from "react-router-dom";

function UserInfo({ users }) {
  const { id } = useParams();

  return users
    .filter((user) => user.id === id)
    .map((user, id) => <Card key={id} userInfo={user} />);
}

export default UserInfo;
