import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.js'
import 'bootstrap/dist/css/bootstrap.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reminders from './Reducers/index';
import './index.css';

const store = createStore(reminders);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)