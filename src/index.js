import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

ReactDOM.createRoot(document.getElementById('root', 'modal-root')).render(
  <React.StrictMode>
    <BrowserRouter basename={ '/DevNest-Front'}>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
