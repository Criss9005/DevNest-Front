/* import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './styles.module.css';
import logo from '../../images/Logo.png';

export default function Header({ isAuthenticated, username, handleLogout }) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegistrationClick = () => {
    navigate('/registration');
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
            <button className={css.buttonLogin} onClick={handleLoginClick}>
              LOGIN
            </button>
            <button
              className={css.buttonLogin}
              onClick={handleRegistrationClick}
            >
              REGISTRATION
            </button>
          </>
        ) : (
          <>
            <div className={css.userInfo}>{username.slice(0, 3)}</div>
            <button className={css.buttonLogout} onClick={handleLogout}>
              Exit
            </button>
            <button className={css.menuButton} onClick={handleMenuClick}>
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                  fill="#212121"
                />
              </svg>
            </button>
          </>
        )}
      </section>
    </header>
  );
}
 */

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
    navigate('/registration');
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
            <button className={css.buttonLogin} onClick={handleLoginClick}>
              LOGIN
            </button>
            <button
              className={css.buttonLogin}
              onClick={handleRegistrationClick}
            >
              REGISTRATION
            </button>
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