import { children } from "react";
import css from "./modal.module.css";

const Modal = ({children, isOpen, closeModal}) => {
    return (
        <div className= {`${css.modal} ${isOpen && css.isopen}`}>
            <div className= {css.modcontainer}>
            <button class= {css.modalclose} onClick={closeModal}> X </button>
            {children}
            </div>
        </div>
    )
}

export default Modal