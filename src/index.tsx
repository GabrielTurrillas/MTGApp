import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './state'

ReactDOM.render(
  <Provider store={store.default}>
    <App />
  </Provider>,
  document.getElementById('root')
);

