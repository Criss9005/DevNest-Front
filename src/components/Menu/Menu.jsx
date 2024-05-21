/* import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import slimPhoto from '../../images/slimPhoto.png';
import css from './styles.module.css';

const Menu = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegistrationClick = () => {
    navigate('/register');
  };

  return (
    <nav className={css.headContainer}>
      <div className={css.logoContainer}>
        <img
          className={css.logoHead}
          src={logo}
          alt="Logo"
          onClick={() => navigate('/')}
        />
        <img
          className={css.slimp}
          src={slimPhoto}
          alt="slimlogo"
          onClick={() => navigate('/')}
        />
      </div>
      <section className={css.sectionRegister}>
        <button className={css.buttonLogin} onClick={handleLoginClick}>
          LOG IN
        </button>
        <button className={css.buttonLogin} onClick={handleRegistrationClick}>
          REGISTRATION
        </button>
      </section>
    </nav>
  );
};

export default Menu; */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import slimPhoto from '../../images/slimPhoto.png';
import css from './styles.module.css';

const Menu = ({ isAuthenticated, username, handleLogout }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegistrationClick = () => {
    navigate('/register');
  };

  const handleMenuClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDiaryClick = () => {
    navigate('/diary');
  };

  const handleCalculatorClick = () => {
    navigate('/calculator');
  };

  return (
    <nav className={css.headContainer}>
      <div className={css.logoContainer}>
        <img
          className={css.logoHead}
          src={logo}
          alt="Logo"
          onClick={() => navigate('/')}
        />
        <img
          className={css.slimp}
          src={slimPhoto}
          alt="Slim Logo"
          onClick={() => navigate('/')}
        />
      </div>
      <section className={css.sectionRegister}>
        {!isAuthenticated ? (
          <>
            <button className={css.buttonLogin} onClick={handleLoginClick}>
              LOG IN
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
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6_1005)">
                  <path
                    d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                    fill="#212121"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_1005">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </>
        )}
      </section>
      {showDropdown && (
        <div className={css.dropdownMenu}>
          <button className={css.dropdownButton} onClick={handleDiaryClick}>
            DIARY
          </button>
          <button
            className={css.dropdownButton}
            onClick={handleCalculatorClick}
          >
            CALCULATOR
          </button>
        </div>
      )}
    </nav>
  );
};

export default Menu;
