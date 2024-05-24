import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import css from './styles.module.css';
import logo from '../../images/Logo.png';
import styled from "styled-components";
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

  const handleLogout = () => { };
  
  useEffect(() => { 
    const usuario = JSON.parse(localStorage.getItem('USER'))
    if (usuario) { 
      setUser(usuario)
      setIsLogged(true)
    }
    console.log(usuario)
    
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
            <div>
              <ul>
                <li>
                      <StyledLink  className={css.buttonLogin} to="/diary">DIARY</StyledLink >
                      <StyledLink className={css.buttonLogin} to="/calculator">CALCULATOR</StyledLink > 
                </li>
                <li>
                  <p>{ `${user.user.username}`}</p>
                  <p></p>
                </li>
              </ul>

              
              </div>
              
            
          
        )}
      </section>
    </header>
  );
}
