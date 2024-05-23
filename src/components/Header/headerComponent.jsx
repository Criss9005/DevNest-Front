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

  const handleMenuClick = () => {};

  return (
    <header className={css.headercontaineer}>
      <section onClick={handleLogoClick} className={css.completeLogo }>
        <img className={css.logo} src={logo} alt="logo_empresa" />
        <div className={css.slimMon} onClick={handleLogoClick}>
            <p className={css.slim}>Slim</p>
            <p className={css.mom}>Mom</p>
      </div>
      </section>
      
      <section className={css.sectionRegister}>
        {!isAuthenticated ? (
          <>
            <p
              className={`${css.buttonLogin} ${css.borderLogin}`}
              onClick={()=> navigate('/login')}
              to="/login"
            >
              LOG IN
            </p>
              
            
            <p
              className={css.buttonLogin}
              onClick={()=> navigate('/register')}
              to="/register"
            >
              REGISTRATION
            </p>
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
