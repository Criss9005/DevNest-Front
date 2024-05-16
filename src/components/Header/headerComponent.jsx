import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './styles.module.css';
import logo from '../../images/Logo.png';

export default function Header() {
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

  return (
    <>
      <header className={css.headercontaineer}>
        <section onClick={handleLogoClick}>
          {' '}
          {/* Agrega el evento de clic a esta sección */}
          <img className={css.logo} src={logo} alt="logo_empresa" />
        </section>
        <section className={css.slimMon}>
          <p className={css.slim}>Slim</p>
          <p className={css.mom}>Mom</p>
        </section>
        <section className={css.sectionRegister}>
          <button className={css.buttonLogin} onClick={handleLoginClick}>
            LOGIN
          </button>
          <button className={css.buttonLogin} onClick={handleRegistrationClick}>
            REGISTRATION
          </button>
        </section>
      </header>
    </>
  );
}
