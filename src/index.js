import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import Counter from './Components/Counter/Counter';
import SmartCouter from './Components/SmatCounter/SmartCounter';
import IfoodCounter from './Components/IfoodCounter/IfoodCounter'


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <SmartCouter/> */}
    <IfoodCounter></IfoodCounter>
  </React.StrictMode>,
  document.getElementById('root')
);

