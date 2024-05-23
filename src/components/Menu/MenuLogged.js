//import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import css from './style.module.css';

const MenuLogged = () => {
  return (
    <nav className={css.menu}>
      <Link to="/">
        <img className={css.logetlo} src={logo} alt="Logo" />
      </Link>
      <ul className={css.logbtn}>
        <li>
          <Link className={css.btnDi} to="/diary">
            DIARY
          </Link>
        </li>
        <li>
          <Link className={css.btnCal} to="/calculator">
            CALCULATOR
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuLogged;
