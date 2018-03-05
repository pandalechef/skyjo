import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';
import { Provider } from 'react-redux';

const appli = (
  <Provider store={store}>
    <Root />
  </Provider>
);

ReactDOM.render(appli, document.getElementById('root'));
registerServiceWorker();
