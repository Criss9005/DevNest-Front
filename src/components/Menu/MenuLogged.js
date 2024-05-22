import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import css from './styles.module.css';

const MenuLogged = () => {
  return (
    <nav className={css.menuNav}>
      <Link to="/">
        <img className={css.menuCont} src={logo} alt="Logo" />
      </Link>
      <ul className={css.menuLogged}>
        <li>
          <Link className={css.btnDia} to="/diary">
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
