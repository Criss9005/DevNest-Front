import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import css from './styles.module.css';
import logo from '../../images/Logo.png';
import styled from "styled-components";
import axios from 'axios';
import Notiflix from 'notiflix';
const StyledLink = styled(NavLink)`
  color: #9b9faa;

  &.active {
    color: black;
  }
`

export default function Header({username }) {
  const [user, setUser] = useState(null)
  const [isLogged, setIsLogged] = useState(false)
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLogout = () => {
    const token = user.accesToken
    axios.post(`https://devnest-back-1.onrender.com/api/auth/logout`, {
        sid: user.sid
      }, {
      headers: { 'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        localStorage.clear()
        Notiflix.Notify.success("Logout complete");
        handleLogoClick()
      
      })
      .catch(e => {
        //implementar alertas cuando no inicia
        Notiflix.Notify.failure(e.response.data.message);
        console.log(e);
      });
   };
  
  useEffect(() => { 
    const usuario = JSON.parse(localStorage.getItem('USER'))
    if (usuario) { 
      setUser(usuario)
      setIsLogged(true)
    }
    
    
    },[])


  return (
    <header className={css.headercontaineer}>
      <section onClick={handleLogoClick} className={css.completeLogo}>
        <img className={css.logo} src={logo} alt="logo_empresa" />
        <div className={css.slimMon} onClick={handleLogoClick}>
          <p className={css.slim}>Slim</p>
          <p className={css.mom}>Mom</p>
        </div>
      </section>
      <section className={css.sectionRegister}>
        {!isLogged ? (
          <> 
            <StyledLink  className={css.buttonLogin} to="/login">LOG IN</StyledLink >
            <StyledLink  className={css.buttonLogin} to="/register">REGISTRATION</StyledLink >
        
          </>
        ) : (
            <>
              <StyledLink className={css.buttonLogin} to="/diary">DIARY</StyledLink >
              <StyledLink className={css.buttonLogin} to="/calculator">CALCULATOR</StyledLink > 
              
                  <p className={css.username }>{ `${user.user.username}`}</p>
                  <p className={css.logout } onClick={(e)=> handleLogout()}> Exit</p>
                
            </>
              
            
          
        )}
      </section>
    </header>
  );
}
