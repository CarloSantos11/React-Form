import React, {useState} from 'react';
import '../index.css';
import Form from './Form/Form'
import IndexView from './IndexView/IndexView'
import Login from './Login/Login'
import '../App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
        <Switch>
          <Route path="/login" exact> 
            { user ? <Redirect to="/index" />: <Login onChange={(eventOne)=> setUser(eventOne)} /> } { /*protected route*/ }
          </Route>
          <Route path="/signup" component={Form} />
          <Route path="/index" component={IndexView} />
        </Switch>
      </Router>
  )
} 

export default App
