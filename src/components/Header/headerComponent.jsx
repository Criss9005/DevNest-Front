import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import css from './styles.module.css';
import logo from '../../images/Logo.png';
import styled from 'styled-components';
import axios from 'axios';
import Notiflix from 'notiflix';
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

  const handleLogout = () => {
    const token = user.accessToken;
    axios
      .post(
        `https://devnest-back-1.onrender.com/api/auth/logout`,
        {
          sid: user.sid,
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
        <img className={css.logo} src={logo} alt="logo_empresa"/>
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
              REGISTRATION
            </StyledLink>
          </>
        ) : (
          <>
            <StyledLink className={css.buttonLogin} to="/diary">
              DIARY
            </StyledLink>
            <StyledLink className={css.buttonLogin} to="/calculator">
              CALCULATOR
            </StyledLink>
            <p className={css.username}>{`${user.user.username}`}</p>
            <p className={css.logout} onClick={handleLogout}>
              Exit
            </p>
          </>
        )}
      </section>
      <MenuMobile />
    </header>
  );
}
