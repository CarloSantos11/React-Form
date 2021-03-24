import React from 'react'
import Card from '../Card/Card';
import users from '../../mock-db/Users'


function IndexView(props) {
  return (
    <>
      {users.map(user => (
        <Card userInfo={user}/>
      ))}
    </>
  )
}


export default IndexView

