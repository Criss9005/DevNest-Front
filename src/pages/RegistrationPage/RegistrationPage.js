import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Notiflix from 'notiflix';
import BackgroundM from 'components/BackgroundM/BackgroundM';
import Header from '../../components/Header/headerComponent.jsx';
import css from './RegistrationPage.module.css';


const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`https://devnest-back-1.onrender.com/api/auth/register`, {
        email: email,
        password: password,
        username: name,
      })
      .then(response => {
        const data = response.data;
        console.log(data);
        navigate('/login');
        Notiflix.Notify.success('Successful Registration');
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className={css.containerRePage}>
      <BackgroundM />
      <Header />
      <h1 className={css.regiPage}>REGISTER</h1>
      <form className={css.labelPage} onSubmit={handleSubmit}>
        <label>
          Name *
          <br />
          <input
            className={css.form}
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </label>
        <br />
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

        <div className="div_button">
          <button className={css.buttonPage} type="submit">
            Register
          </button>

          <button className={css.buttonPage} onClick={(e)=> navigate("/login")}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
