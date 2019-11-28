//Dependencias

import React from 'react';
import ReactDOM from 'react-dom';
//sacar import { render } from 'react-dom';
// sacar import { Router } from 'react-router-dom';
//Router 
//import AppRoutes from './routes';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// sacar render(<Router>
//<AppRoutes/>
//</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
