import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import reportWebVitals from './reportWebVitals';


function AppTwo() {
  return (
    <h1>This is the second app</h1>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App authorized={false} login="snowleopardAlexa" />
    </Router>
   
    
    <AppTwo />,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
