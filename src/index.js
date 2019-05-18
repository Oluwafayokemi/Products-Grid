import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faPlus);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
