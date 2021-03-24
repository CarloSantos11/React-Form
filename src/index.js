import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './components/Form/Form'
import IndexView from './components/IndexView/IndexView'
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Form />
    <IndexView/>
  </React.StrictMode>,
  document.getElementById('root')
);
