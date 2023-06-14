import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MenuContextProvider from './Helpers/menuContext';
import { Provider } from 'react-redux';
import { store } from './Store';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MenuContextProvider>
          <ReactNotifications />
          <App />
        </MenuContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);