import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import InfoComponent from './components/info-component'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// Guest wireless IP - 10.134.235.6