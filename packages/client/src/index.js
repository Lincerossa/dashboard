import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor} from './redux'
import Routes from './routes'
import theme from './styles/theme'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </ThemeProvider>
, document.getElementById('root'));
registerServiceWorker();
