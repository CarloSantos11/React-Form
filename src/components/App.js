import React, {useState} from 'react';
import '../index.css';
import Form from './Form/Form'
import IndexView from './IndexView/IndexView'
import Login from './Login/Login'
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom'
import Nav from './Nav/Nav'

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Nav/>

      <Switch>
        <Route path="/" exact> 
          { user ? <Redirect to="/index" />: <Login onChange={(eventOne)=> setUser(eventOne)} /> } { /*protected route*/ }
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
