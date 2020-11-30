import {createStore, applyMiddleware, compose} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './reducer';
import thunk from 'redux-thunk';



export default createStore(
    rootReducer,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
);
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (a) -> a