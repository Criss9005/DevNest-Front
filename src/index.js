import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

ReactDOM.createRoot(document.getElementById('root', 'modal-root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
