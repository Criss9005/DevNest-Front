import React from 'react';
import ReactDOM from 'react-dom';
import css from './modal.module.css';

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={`${css.modal} ${isOpen ? css.isopen : ''}`}>
      <div className={css.modcontainer}>
        <button onClick={closeModal} className={css.modalclose}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

/* const Modal = ({ children, isOpen, closeModal }) => {
  return (
    (
      <div className={`${css.modal} ${isOpen && css.isopen}`}>
        <div className={css.modcontainer}>
          <button class={css.modalclose} onClick={closeModal}>
            {' '}
            X{' '}
          </button>
          {children}
        </div>
      </div>
    ),
    document.getElementById('modal-root')
  );
};
 */
export default Modal;
