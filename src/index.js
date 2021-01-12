import React from 'react';
import ReactDOM from 'react-dom';
import * as singleSpa from 'single-spa';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {registerMfe} from "./test-mfe";
import "./set-public-path";

console.log('here')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

singleSpa.start();
registerMfe();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
