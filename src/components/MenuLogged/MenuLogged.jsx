import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import Notiflix from 'notiflix';
import css from './MenuLogged.module.css'


export default function MenuLogged() {

  
    const [data, setData] = useState("");
    const [user, setUser] = useState("");
    const navigate = useNavigate();
    const handleLogoClick = () => {
    localStorage.removeItem('USER')
    localStorage.removeItem('CAL_NO_USER')
    navigate('/');
    };
    
    
    useEffect(() => {

        const updateData = () => { 
        const usuario = JSON.parse(localStorage.getItem('USER'));
            if (usuario) {
                setData(usuario);
                setUser(usuario.user.username)

            }
        }
        updateData()

    
    },[]);

    const handleLogout = () => {
        const token = data.accessToken;
        
    axios
      .post(
        `https://devnest-back-1.onrender.com/api/auth/logout`,
        {
          sid: data.sid,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(response => {
        Notiflix.Notify.success('Logout complete');
        handleLogoClick();
      })
      .catch(e => {
        Notiflix.Notify.failure(e.response.data.message);
      });
  };

  return (
      <div className={ css.menuContainer}>
          <p className={css.username}>{user}</p>
          <p className={css.logout} onClick={handleLogout}>Exit</p>
      </div>
  )
}
