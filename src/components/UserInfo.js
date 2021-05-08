import Card from "./Card";
import { useParams } from "react-router-dom";

export default function UserInfo({ users }) {
  const { id } = useParams();
  // console.log(id, users);
  return users
    .filter((user) => user.id === id)
    .map((user, id) => <Card key={id} userInfo={user} />);
}
