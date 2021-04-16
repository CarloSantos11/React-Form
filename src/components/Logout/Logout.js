//import { useState } from 'react'

function Logout({ onSubmit }) {
  //const [ offline, setOffline ] = useState(true);

  onSubmit.active.map((userStatus) => (userStatus ? (userStatus = false) : ""));
}

export default Logout;
