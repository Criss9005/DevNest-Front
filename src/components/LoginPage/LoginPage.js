import React, { useState } from 'react';
import '../StyleComponents.css';
import { Link } from 'react-router-dom';
import BackgroundM from 'components/BackgroundM/BackgroundM';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <BackgroundM />
      <h1>LOG IN</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email *
          <br />
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password *
          <br />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>

        <div className="div_button">
          <button type="submit">Log in</button>
          <button className="register-button"><Link to="/register">Register</Link></button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
