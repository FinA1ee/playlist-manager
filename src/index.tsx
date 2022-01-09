/*
 * @file: file description
 * @author: your name
 * @Date: 2021-10-21 17:14:56
 * @LastEditors: your name
 * @LastEditTime: 2022-01-09 20:49:44
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { Auth0Provider } from '@auth0/auth0-react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.less';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={"dev-m-t6f9-n.us.auth0.com"}
      clientId={"KMV7DE2SrA2cFdux3WVbSld7Vi3TalhI"}
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
