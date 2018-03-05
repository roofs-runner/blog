import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import App from './components/app';
import ReduxPromise from 'redux-promise';
import '../style/style.scss';
import {BrowserRouter, Route} from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container')
);
