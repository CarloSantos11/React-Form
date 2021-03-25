import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './components/Form/Form'
import IndexView from './components/IndexView/IndexView'
import Login from './components/Login/Login'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Form} />
      <Route path="/index" component={IndexView} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
