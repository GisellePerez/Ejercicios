import React from 'react';
import ReactDOM from 'react-dom';
//import fontAwesome from './recursos/fotawesome-all.min.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
