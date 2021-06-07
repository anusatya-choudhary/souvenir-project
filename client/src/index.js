import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60
//https://stackoverflow.com/questions/63525198/redux-difference-between-using-compose-or-applymiddleware-without-it
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import reducers from './reducers';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root'));