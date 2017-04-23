import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import itemsReducer from './reducers';
import App from './components/App/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';

let store = createStore(itemsReducer);

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
