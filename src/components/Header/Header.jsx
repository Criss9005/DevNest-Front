import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import logo from '../../images/Logo.png';
import styled from 'styled-components';
import MenuMobile from '../MenuMobile/MenuMobile';

const StyledLink = styled(NavLink)`
  color: #9b9faa;

  &.active {
    color: black;
  }
`;

export default function Header() {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    localStorage.clear();
    navigate('/');
  };

  

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('USER'));
    if (usuario) {
      setUser(usuario);
      setIsLogged(true);
    }
  }, []);

  return (
    <header className={css.headercontaineer}>
      <section onClick={handleLogoClick} className={css.completeLogo}>
        <img className={css.logo} src={logo} alt="logo_empresa" />
        <div className={css.slimMon} onClick={handleLogoClick}>
          <p className={css.slim}>Slim</p>
          <b className={css.mom}>Mom</b>
        </div>
      </section>
      <section className={css.sectionRegister}>
        {!isLogged ? (
          <>
            <StyledLink className={css.buttonLogin} to="/login">
              LOG IN
            </StyledLink>
            <StyledLink className={css.buttonLogin} to="/register">
              REGISTER
            </StyledLink>
          </>
        ) : 
          <> 
            <div className={css.menuMobile}>
            <StyledLink className={css.buttonLogin} to="/diary">
              DIARY
            </StyledLink>
            <StyledLink className={css.buttonLogin} to="/calculator">
              CALCULATOR
            </StyledLink>
            </div>
            <MenuMobile user={ user.user.username } />
          </>
        }
      </section>
      
    </header>
  );
}
