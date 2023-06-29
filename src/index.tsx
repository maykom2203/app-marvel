import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from "../src/Styles/Global";
import MarvelProvider from './Context/marvelProvider';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MarvelProvider>
        <App />
      </MarvelProvider>
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>,

);


