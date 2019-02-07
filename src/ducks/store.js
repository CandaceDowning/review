import {createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './reducer'

//store handles the backend of the package code

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(promiseMiddleware)));


export default store;
