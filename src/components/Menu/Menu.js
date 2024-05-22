//import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';



const Menu = () => {

  //const [isLogged, setIslogged] = useState('')
  
  

/* useEffect(() => { 

    const logged = localStorage.getItem('USER')
    console.log(JSON.parse(logged))
    if (logged != null) {
      setIslogged(true)
    } else { 
      setIslogged(false)
    }
    console.log(isLogged)
  },[isLogged]) */

  return (
    <nav className="menu">
      <Link to="/"><img src={logo} alt="Logo" /></Link>
      <ul>
        <li><Link to="/login">LOG IN</Link></li>
        <li><Link to="/register">REGISTRATION</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
