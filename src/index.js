import React from 'react';
import ReactDOM from 'react-dom';
import './styles/_index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-responsive-modal/styles.css';
import 'react-calendar/dist/Calendar.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
