import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './styles.module.css';
import logo from '../../images/Logo.png';
import menuIcon from '../../images/Menu.svg';

export default function Header({ handleLogout }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log('running');
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('user from localStorage:', user);

    if (user && user.token) {
      console.log('is authenticated');
      setIsAuthenticated(true);
      setUsername(user.username);
    } else {
      console.log('is not authenticated');
      setIsAuthenticated(false);
      setUsername('');
    }
  }, []);

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

  console.log('Rendering Header component with:', {
    isAuthenticated,
    username,
  });

  return (
    <header className={css.headercontaineer}>
      <section onClick={handleLogoClick}>
        <img className={css.logo} src={logo} alt="logo_empresa" />
      </section>
      <section className={css.slimMon} onClick={handleLogoClick}>
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
          <section>
            <div className={css.userInfo}>{username.slice(0, 3)}</div>
            <button className={css.buttonLogout} onClick={handleLogout}>
              Exit
            </button>
            <button className={css.menuButton} onClick={handleMenuClick}>
              <img src={menuIcon} alt="menu icon" className={css.menuIcon} />
            </button>
          </section>
        )}
      </section>
    </header>
  );
}
