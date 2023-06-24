import React from 'react';
import ReactDOM from 'react-dom/client';
import {  persistor, store } from 'redux/store';
import { Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import  App  from 'App/App';
import './css/index.css';
// import { ThemeProvider } from 'styled-components';

// import { theme } from './constants/theme';



ReactDOM.createRoot(document.getElementById('root')).render(

  
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename = "goit-react-hw-08-phonebook">
         <App></App>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  
  </React.StrictMode>
);
