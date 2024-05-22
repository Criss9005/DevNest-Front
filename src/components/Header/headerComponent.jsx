import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './styles.module.css';
import logo from '../../images/Logo.png';
import menuIcon from '../../images/Menu.svg';

export default function Header({ isAuthenticated, username, handleLogout }) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegistrationClick = () => {
    navigate('/register');
  };

  const handleMenuClick = () => {};

  return (
    <header className={css.headercontaineer}>
      <section onClick={handleLogoClick}>
        <img className={css.logo} src={logo} alt="logo_empresa" />
      </section>
      <section className={css.slimMon}>
        <p className={css.slim}>Slim</p>
        <p className={css.mom}>Mom</p>
      </section>
      <section className={css.sectionRegister}>
        {!isAuthenticated ? (
          <>
            <buttonLink
              className={css.buttonLogin}
              onClick={handleLoginClick}
              to="/login"
            >
              LOGIN
            </buttonLink>
            <buttonLink
              className={css.buttonLogin}
              onClick={handleRegistrationClick}
              to="/register"
            >
              REGISTRATION
            </buttonLink>
          </>
        ) : (
          <>
            <div className={css.userInfo}>{username.slice(0, 3)}</div>
            <button className={css.buttonLogout} onClick={handleLogout}>
              Exit
            </button>
            <button className={css.menuButton} onClick={handleMenuClick}>
              <img src={menuIcon} alt="menu icon" className={css.menuIcon} />
            </button>
          </>
        )}
      </section>
    </header>
  );
}
