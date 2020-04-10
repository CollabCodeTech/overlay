import React from 'react';
import ReactDOM from 'react-dom';
import Colors from './settings/Colors';
import Reset from './styles/generic/Reset';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Colors />
    <Reset />

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

