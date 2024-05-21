import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

/* const StyledLink = styled(NavLink)`
  color: black;
  text-decoration:none;
  &.active {
    color: #1976d2;
  }
` */

const Menu = () => {
  return (
    <nav className="menu">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link to="/login">LOG IN</Link>
        </li>
        <li>
          <Link to="/register">REGISTRATION</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
