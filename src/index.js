import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './component/App';
import registerServiceWorker from './util/registerServiceWorker';

import thunkMiddleware from 'redux-thunk'
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";

import 'bootstrap/dist/css/bootstrap.css';
import rootReducer from "./reducer/index";

const store = createStore(rootReducer,
  applyMiddleware(
    thunkMiddleware
  ))
;

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();