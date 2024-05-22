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

export default Modal;


/* useEffect(() => {
    const close = (e) => {
      if(e.keyCode === 27){
        props.onCloseModal()
      }
    }
    window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
},[]) */
