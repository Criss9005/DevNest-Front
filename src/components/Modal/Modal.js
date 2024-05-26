import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import css from './modal.module.css';
import flecha from '../../images/flecha.png';

const Modal = ({ isOpen, closeModal, children }) => {
  useEffect(() => {
    const handleEsc = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    } else {
      document.removeEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={`${css.modal} ${isOpen ? css.isopen : ''}`}
      onClick={closeModal}
    >
      <div className={css.flecha}>
        <img src={flecha}
        className={css.flechamenu}></img>
      </div>
      <div className={css.modcontainer} onClick={e => e.stopPropagation()}>
        <button onClick={closeModal} className={css.modalclose}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;

