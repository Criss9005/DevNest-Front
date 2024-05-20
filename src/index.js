import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

ReactDOM.createRoot(document.getElementById('root', 'modal-root')).render(
=======
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(
>>>>>>> Adrian
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
