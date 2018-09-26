import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

var destination = document.querySelector("#container")

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root')
);
