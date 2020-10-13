import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App.jsx';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { storeReducer } from './redux/reducer';
import { Provider } from 'react-redux';


const store = createStore(storeReducer);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
