import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './nells-app.css'

import Auth0ProviderwithHistory from './Components/Auth0ProviderwithHistory';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
    <Auth0ProviderwithHistory>
      <App />
    </Auth0ProviderwithHistory>
  </Router>,
  document.getElementById('root')
);