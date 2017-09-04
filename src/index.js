import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import modules from './modules';
import ReduxThunk from 'redux-thunk'
import App from './containers/App';
import {createStore, applyMiddleware, compose} from 'redux'
import promiseMiddleware from 'redux-promise-middleware';


const customizePromiseMiddleware = promiseMiddleware({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'FAILURE']
});


//const store = createStore(modules, applyMiddleware(ReduxThunk,promise), window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());
const store = compose(applyMiddleware(ReduxThunk,customizePromiseMiddleware))(createStore)(modules, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root'));


