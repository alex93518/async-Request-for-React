import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import modules from './modules';
import ReduxThunk from 'redux-thunk'
import App from './containers/App';
import {createStore, applyMiddleware, compose} from 'redux'


//const store = createStore(modules, applyMiddleware(ReduxThunk,promise), window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());
const store = compose(applyMiddleware(ReduxThunk))(createStore)(modules, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root'));


