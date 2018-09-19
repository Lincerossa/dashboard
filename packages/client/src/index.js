import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux'
import Routes from './routes'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render( 
  <Provider store={store}>
    <Routes />
  </Provider>


, document.getElementById('root'));
registerServiceWorker();
