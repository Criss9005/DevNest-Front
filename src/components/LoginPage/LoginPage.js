import React, { useState } from 'react';
import '../StyleComponents.css';

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

        <div>
          <button type="submit">Log in</button>
          <button className="register-button">Register</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
