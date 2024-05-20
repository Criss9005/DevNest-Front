import React from 'react';
import styles from './Button.module.css';

function Button({id, title, type, disabled=false, className, onClose}){
    return (
        <button id={styles[id]} disabled={disabled} type={type} className={styles[className]} onClick={onClose}>{title}</button>
    )
}

export default Button;