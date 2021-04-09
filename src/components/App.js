import React, {useState} from 'react';
import '../index.css';
import Form from './Form'
import IndexView from './IndexView'
import Login from './Login'
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Nav from './Nav'

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Nav/>

      <Switch>
        <Route path="/" exact> 
          { user ? <Redirect to="/index" />: <Login setUserState={(user)=> setUser(user)} /> } { /*protected route*/ }
        </Route>
        <Route path="/signup">
          <Form/>
         </Route>
        <Route path="/index">
          <IndexView/>
        </Route>
      </Switch>
    </Router>

    
  )
} 

export default App
