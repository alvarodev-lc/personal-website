import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Loader from './components/Loader/loader'

ReactDOM.render(
  <React.StrictMode>
    <Loader/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
