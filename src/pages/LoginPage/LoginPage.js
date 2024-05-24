import React, { useState } from 'react';
import BackgroundM from 'components/BackgroundM/BackgroundM';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import Header from '../../components/Header/headerComponent.jsx';
import css from './LoginPage.module.css';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
 
  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    axios
      .post(`https://devnest-back-1.onrender.com/api/auth/login`, {
        email: email,
        password: password,
      })
      .then(response => {
        const data = response.data.result;
        

        if (data) {
          const stringData = JSON.stringify(data);
          localStorage.setItem('USER', stringData);
          navigate('/calculator');
        }
      })
      .catch(e => {
        //implementar alertas cuando no inicia
        Notiflix.Notify.failure(e.response.data.message);
        console.log(e);
      });
  };

  return (
    <div className={css.containerLogPage}>
      <Header />
      <BackgroundM />
      <h1 className={css.loginPage}>LOG IN</h1>
      <form className={css.labelPage} onSubmit={handleSubmit}>
        <label>
          Email *
          <br />
          <input
            className={css.form}
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <br />
        <label>
          Password *
          <br />
          <input
            className={css.form}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>

        <div className={css.logButtons}>
          <button className={css.buttonPage} type="submit">
            Log in
          </button>
          <button className={css.buttonPage} onClick={(e) => navigate("/register") }>
            Register
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
