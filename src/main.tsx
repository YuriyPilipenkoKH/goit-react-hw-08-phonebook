import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'

import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

async function renderApp() {

  root.render(
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename='/goit-react-hw-08-phonebook'>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </StrictMode>
  );
}

renderApp();
