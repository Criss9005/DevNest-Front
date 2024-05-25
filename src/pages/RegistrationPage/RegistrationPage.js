import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Notiflix from 'notiflix';
import BackgroundM from 'components/BackgroundM/BackgroundM';
import Header from '../../components/Header/Header';
import css from './RegistrationPage.module.css';


const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 
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
      <Header />
      <BackgroundM />
      <h1 className={css.regiPage}>REGISTER</h1>
      <form className={css.labelPage} onSubmit={handleSubmit}>
        <label>
          Name *
          <br />
          <input
            className={css.form}
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
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
            onChange={(e)=>setEmail(e.target.value)}
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
            onChange={(e)=> setPassword(e.target.value)}
            required
          />
        </label>

        <div className={css.logButtons}>
          <button className={css.buttonPage} type="submit">
            Register
          </button>

          <button className={css.buttonPage} type='button' onClick={(e)=> navigate("/login")}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
