import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {rootReducer} from './modules';

const store = configureStore({reducer: rootReducer});

ReactDOM.render(
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);