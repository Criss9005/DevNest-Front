import { useNavigate } from 'react-router-dom';
import React from 'react';
import styles from './Button.module.css';

function Button({ id, title, type, disabled = false, className, onClose }) {
    
    const navigate = useNavigate();

    const handleValidate = () => {
  
        let isLogged = localStorage.getItem('USER')
        
        if (isLogged) {
            navigate('/diary');
    
        }
    }

    return (
        <button id={styles[id]} disabled={disabled} type={type} className={styles[className]} onClick={() => { 
            const oli = onClose
            handleValidate(oli)
        }
             }>{title}</button>
    )
}

export default Button;