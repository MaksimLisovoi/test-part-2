import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './index.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    tableBg: string;
    border: string;
    accent: string;
    textColor: string;
    aqua: string;
  }
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#05a',
      tableBg: '#293143',
      border: '#1d2330',
      accent: '#343e56',
      textColor: '#8699b8',
      aqua: '#47c2be',
    },

    common: {
      black: '#293143',
    },
    background: {
      default: '#171B26',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 768,
      lg: 1024,
      xl: 1320,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
