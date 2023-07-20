import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodoContextProvider } from './context';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <TodoContextProvider>
    <App />
    </TodoContextProvider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
