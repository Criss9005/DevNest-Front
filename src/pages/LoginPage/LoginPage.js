import React, { useState } from 'react';
import '../../components/StyleComponents.css';
import BackgroundM from 'components/BackgroundM/BackgroundM';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import Header from '../../components/Header/headerComponent.jsx';

function ButtonLink({ to, children }) {
  return (
    <Link to={to}>
      <button>{children}</button>
    </Link>
  );
}

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
        console.log(data);

        if (data) {
          const stringData = JSON.stringify(data);
          localStorage.setItem('USER', stringData);
          console.log(stringData);
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
    <div className="login-container">
      <Header />
      <BackgroundM />
      <h1>LOG IN</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email *
          <br />
          <input
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
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>

        <div className="div_button">
          <button type="submit">Log in</button>
          <ButtonLink className="register-button" to="/register">
            Register
          </ButtonLink>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
