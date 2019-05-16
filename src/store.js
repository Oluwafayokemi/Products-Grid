import { applyMiddleware, compose, createStore } from 'redux';

import { createBrowserHistory } from 'history';
import logger from "redux-logger";
import reducer from './reducer';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;
  middleware.push(logger);
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(reducer, initialState, composedEnhancers);

export default store;
