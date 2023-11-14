import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeUIProvider } from 'theme-ui';
import ReactDOM from 'react-dom/client';
import theme from './const/theme';
import App from './App';
import './utils/i18n/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeUIProvider theme={theme}>
    <App />
    </ThemeUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
